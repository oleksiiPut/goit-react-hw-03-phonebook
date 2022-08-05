import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const P = styled.p`
  font-size: 20px;
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const ListBtn = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  &:hover {
    background-color: rgba(200, 255, 255, 0.4);
  }
`;
