import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from '../SearchInput';
import styled from 'styled-components';

export default function Header() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://reqres.in/api/products?per_page=12'
        );
        const { data } = await response.data;
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  if (loading === true) return <p>...loading</p>;
  return (
    <HeaderWrapper>
      <SearchInput data={data} />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
