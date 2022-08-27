// import { createUserWithEmail
import { useAuthContext } from '../context/AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from 'src/firebase'

const SignUp = () => {
  const { user } = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
  }
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  return (
    <div>
      <h1>ユーザー登録 {user?.email}</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
