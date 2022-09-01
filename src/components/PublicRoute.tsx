import { useAuthContext } from '../context/AuthContext'
import { Navigate, RouteProps } from 'react-router-dom'

const PublicRoute = (props: RouteProps) => {
  const { children } = props
  const { user } = useAuthContext()
  return user ? (
    <>
      <Navigate to={'/'} />
    </>
  ) : (
    <>{children}</>
  )
}

export default PublicRoute
