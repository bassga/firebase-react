import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'src/App.css'
import Home from 'src/components/Home'
import SignUp from 'src/components/SignUp'
import { AuthProvider } from 'src/context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  )
}

export default App
