import { useAuthContext } from '../context/AuthContext'
import { Navigate, RouteProps } from 'react-router-dom'

export const PrivateRoute = (props: RouteProps) => {
  const { user } = useAuthContext()
  const { children } = props
  if (!user) {
    return (
      <>
        <Navigate to="/login" />
      </>
    )
  }
  return <>{children}</>
}
