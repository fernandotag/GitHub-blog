import styled from 'styled-components'

export const StyledDefaultLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  font-family: Nunito, sans-serif;

  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }

  background-color: ${(props) => props.theme['base-background']};
`
