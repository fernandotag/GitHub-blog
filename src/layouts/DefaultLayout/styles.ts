import styled from 'styled-components'

export const StyledDefaultLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  font-family: Nunito, sans-serif;

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme['base-title']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    margin: 1rem 0;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  background-color: ${(props) => props.theme['base-background']};
`
