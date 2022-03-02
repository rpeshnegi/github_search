import React from 'react';
import styled from 'styled-components';
import { IRepository } from '../types/IRepository.d';

const StyledContainer = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px;
  max-width 300px;
  margin: auto;
  background: #282c34;
  margin-top: 5px
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const CountData = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

type Props = {
  item: IRepository
}

const Card: React.FC<Props> = function Card({ item }) {
  return (
    <StyledContainer>
      <Title>
        <a target="_blank" href={item.html_url} rel="noreferrer">
          {item.name}
        </a>
      </Title>
      <CountData>{item.stargazers_count}</CountData>
      <CountData>{item.watchers_count}</CountData>
    </StyledContainer>
  );
};
export default Card;
