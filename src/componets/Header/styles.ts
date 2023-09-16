import { styled } from 'styled-components'
import coverImage from '../../assets/header-cover.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${coverImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 9.25rem;
    margin-top: 4rem;
  }
`
