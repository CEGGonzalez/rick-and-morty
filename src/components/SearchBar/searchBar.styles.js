import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin-top: -14px;
  height: 60px;
  width: 100%; 
  position: sticky;
  top: 0;
 
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 12px 20px;
  border: solid #39ff14 2px;
  border-radius: 7px 0px 0px 7px;
  box-sizing: border-box;
  box-shadow: inset 0 0 5px #8o8o8o;
`;

export const Button1 = styled.button`
  width: 60px;
  height: 40px;
  border: solid #39ff14 2px;
  background: white;

&:hover {
  scale: 1.1;
}
`;
