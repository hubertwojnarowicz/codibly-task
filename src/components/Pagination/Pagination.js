import { ArrowLeft, ArrowRight } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as ROUTES from '../../routes/routes';

export default function Pagination({ pageParam }) {
  const pageParamToNum = parseInt(pageParam);
  const nextBtnDisabled = pageParamToNum === 3;
  const prevBtnDisabled = pageParamToNum === 1;

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate(`?page=${pageParamToNum + 1}`);
  };

  const handlePrevClick = () => {
    if (pageParamToNum === 2) {
      navigate(ROUTES.HOME);
    } else {
      navigate(`?page=${pageParamToNum - 1}`);
    }
  };

  return (
    <ButtonsWrapper>
      <PrevPageBtn disabled={prevBtnDisabled} onClick={handlePrevClick}>
        <ArrowLeft />
      </PrevPageBtn>
      <NextPageBtn onClick={handleNextClick} disabled={nextBtnDisabled}>
        <ArrowRight />
      </NextPageBtn>
    </ButtonsWrapper>
  );
}

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const PrevPageBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextPageBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
