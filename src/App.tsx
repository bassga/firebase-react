import Home from './components/Home'
import Login from './components/Login'
import { NotFound } from './components/NotFound'
import { PrivateRoute } from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'src/App.css'
import { AuthProvider } from 'src/context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  )
}

export default App
