import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function ColorComp() {
  const [color, setColor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const idToNum = parseInt(id);

  useEffect(() => {
    if (idToNum > 12 || idToNum < 1) {
      setError('no color corresponding to that id');
      setLoading(false);
    } else {
      const getColor = async () => {
        try {
          const colorResponse = await axios.get(
            `https://reqres.in/api/products/${id}`
          );
          const { data } = await colorResponse.data;
          setColor(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      getColor();
    }
  }, [id, idToNum]);

  if (loading === true) return <p>...loading</p>;
  if (error) {
    return <div>{error}</div>;
  }
  if (loading === false) {
    // add second if in diffrent scope because id has already been decleared
    const { id, name, year } = color;

    return (
      <ColorWrapper>
        <ColorWrapperChildren>id: {id}</ColorWrapperChildren>
        <ColorWrapperChildren>name: {name}</ColorWrapperChildren>
        <ColorWrapperChildren>year: {year}</ColorWrapperChildren>
      </ColorWrapper>
    );
  }
}

const ColorWrapper = styled.div`
  display: flex;
  gap: 4px;
  font-size: 1.125rem;
`;

const ColorWrapperChildren = styled.span``;
