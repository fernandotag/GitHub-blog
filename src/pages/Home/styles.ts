import styled from 'styled-components'

export const HomeContainer = styled.div`
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
export const SearchSection = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  input {
    width: 100%;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const SearchLabel = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 0.75rem;
`

export const PostList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 14rem;

  li {
    width: 26rem;
  }

  @media (max-width: 680px) {
    li {
      width: 100%;
    }
  }
`
