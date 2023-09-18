import styled from 'styled-components'

export const PostDetailsContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  min-height: calc(100vh - 18.5rem);
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;

  @media (max-width: 680px) {
    padding: 0px 1rem;
  }
`

export const PostContent = styled.main`
  padding: 1.5rem 2rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
  padding-bottom: 8rem;

  h1,
  h2,
  h3 {
    margin: 1.5rem 0;
  }

  p {
    margin: 1rem 0;
  }
`
