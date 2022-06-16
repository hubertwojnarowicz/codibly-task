import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ColorCard({ id, name, year }) {
  return (
    <ColorCardWrapper to={`/colors/${id}`}>
      <ColorCardWrapperChildren>id: {id}</ColorCardWrapperChildren>
      <ColorCardWrapperChildren>name: {name}</ColorCardWrapperChildren>
      <ColorCardWrapperChildren>year: {year}</ColorCardWrapperChildren>
    </ColorCardWrapper>
  );
}

const ColorCardWrapper = styled(Link)`
  display: flex;
  gap: 4px;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  padding: 2px 4px;
`;

const ColorCardWrapperChildren = styled.span`
  white-space: nowrap;
`;
