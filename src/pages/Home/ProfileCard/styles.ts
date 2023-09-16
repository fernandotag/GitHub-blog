import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  width: 100%;
  min-height: 13.25rem;
  background-color: ${(props) => props.theme['base-profile']};
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  padding: 2rem;
  margin-top: -5.5rem;
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    border-radius: 0.5rem;
  }

  & > div {
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 1.5rem;
  }

  @media (max-width: 680px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
`

export const ProfileCardHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1.5rem;

  a {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    text-decoration: none;

    svg {
      width: 0.75rem;
      margin-left: 0.5rem;
    }
  }
`

export const ProfileCardBody = styled.div``

export const ProfileCardFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${(props) => props.theme['base-subtitle']};

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
