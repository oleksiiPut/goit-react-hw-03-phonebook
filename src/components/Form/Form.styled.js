import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: rgba(130, 120, 210, 0.3);
  border-radius: 4px;
`;

export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormBtn = styled.button`
  max-width: 120px;
  border-radius: 5px;
  padding: 10px;
  border: none;
  margin: auto;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: rgba(240, 240, 200, 0.7);
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  color: darkcyan;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 5px;
  height: 24px;
  border: none;
  background-color: rgba(240, 240, 200, 0.7);
  font-size: 20px;
  border-radius: 4px;
`;
