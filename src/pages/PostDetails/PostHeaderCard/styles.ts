import styled from 'styled-components'

export const PostHeaderCardContainer = styled.div`
  width: 100%;
  min-height: 10.5rem;
  height: auto;
  background-color: ${(props) => props.theme['base-profile']};
  display: grid;
  gap: 0.5rem;
  padding: 2rem;
  margin-top: -5.5rem;
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 680px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
`

export const PostHeaderCardHeader = styled.div`
  padding-bottom: 0.75rem;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 160%;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  width: 100%;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    svg {
      margin-left: 0.5rem;
    }
  }
`

export const PostHeaderCardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 130%;
`

export const PostHeaderCardFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${(props) => props.theme['base-span']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme['base-label']};
    width: 1.125rem;
    height: 1.125rem;
  }
`
