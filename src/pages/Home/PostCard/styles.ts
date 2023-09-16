import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(NavLink)`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme['base-post']};
  border: 2px solid transparent;
  border-radius: 0.625rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  transition: border 0.2s;
  padding: 2rem;

  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const PostCardHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  h1 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  #time {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
    margin-left: 1rem;
  }
`

export const PostCardBody = styled.div`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 400;
`
