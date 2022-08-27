// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useRef } from 'react'

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const emailPassword = useRef<HTMLInputElement>(null)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (
      !(
        emailRef.current instanceof HTMLInputElement &&
        emailPassword.current instanceof HTMLInputElement
      )
    )
      return
    console.log(emailRef.current.value, emailPassword.current.value)
  }
  return (
    <div>
      <h1>ユーザー登録</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" ref={emailRef} />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" ref={emailPassword} />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
