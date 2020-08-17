import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.button`
  background: #FF9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312E38;
  font-weight: 500;
  width: 100%;
  margin-top: 16px;
  transition: backgroud-color .5;

  &:hover {
    background: ${shade(0.2, '#FF9000')}
  }
`;
