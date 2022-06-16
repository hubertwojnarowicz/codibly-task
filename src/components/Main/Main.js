import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../Pagination';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export default function Main({ query }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  let pageParam;
  query === null ? (pageParam = 1) : (pageParam = query);
  console.log(pageParam);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://reqres.in/api/products?per_page=5&page=${parseInt(
            pageParam
          )}`
        );
        const { data } = await response.data;
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [pageParam]);
  if (loading) return <p>...loading</p>;
  return (
    <MainWrapper>
      <ColorsWrapper>
        {data.map((color) => {
          const { id, name, year } = color;
          return (
            <Card key={id} to={`/colors/${id}`}>
              <CardChildren>id: {id}</CardChildren>
              <CardChildren>name: {name}</CardChildren>
              <CardChildren>year: {year}</CardChildren>
            </Card>
          );
        })}
      </ColorsWrapper>
      <Pagination pageParam={pageParam} />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-direction: column;
`;

const ColorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 64px;
`;

const Card = styled(Link)`
  display: flex;
  gap: 4px;
  border: 1px solid black;
  text-decoration: none;
  color: black;
`;

const CardChildren = styled.span``;
