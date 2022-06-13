import styled from 'styled-components';

export const Container = styled.header`
  background: var(--color-blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 112rem;
  padding: 2rem 1.6rem 19.2rem;
  margin: 0 auto;

  button {
    height: 4.8rem;
    font-size: 1.6rem;
    background: var(--color-blue-light);
    border: 0;
    color: var(--color-white);
    padding: 0 3.2rem;
    border-radius: 0.4rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;