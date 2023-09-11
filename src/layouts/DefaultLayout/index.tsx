import { Header } from '../../componets/Header'
import { StyledDefaultLayout } from './styles'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <StyledDefaultLayout>
      <Header />
      <Outlet />
    </StyledDefaultLayout>
  )
}
