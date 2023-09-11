import { styled } from 'styled-components'
import coverImage from '../../assets/header-cover.svg'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 18.5rem;
  background: url(${coverImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  display: flex;
  align-items: center;
  justify-content: center;
`
