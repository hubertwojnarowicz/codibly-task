import { useState } from 'react';
import styled from 'styled-components';
import ColorCard from '../ColorCard';
import { useNavigate } from 'react-router-dom';

export default function SearchInput({ data }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      navigate(`/colors/${inputValue}`);
    } else {
      setError('Please enter color id');
    }
  };

  let queryData = data;

  if (inputValue !== '') {
    queryData = data.filter((color) => {
      const idToString = color.id.toString();
      return idToString.includes(inputValue);
    });
  }

  const handleInput = (e) => {
    setInputValue((v) => (e.target.validity.valid ? e.target.value : v));
  };

  // const debouncedInputHandler = useMemo(() => debounce(handleInput, 300), []);

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Label htmlFor="search">Search colors</Label>
        <Input
          id="search"
          type="text"
          pattern="[0-9]*"
          value={inputValue}
          onChange={handleInput}
          placeholder="Enter color id"
        />
      </InputWrapper>
      <CardWrapper>
        {inputValue !== ''
          ? queryData.map((color) => <ColorCard key={color.id} {...color} />)
          : null}
        {error}
      </CardWrapper>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`;

const Label = styled.label``;

const Input = styled.input``;

const CardWrapper = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  gap: 8px;
  top: 120%;
  flex-direction: column;
`;
