import styled from 'styled-components'

export const PostDetailsContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  min-height: calc(100vh - 18.5rem);
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  @media (max-width: 680px) {
    padding: 0px 1rem;
  }
`
