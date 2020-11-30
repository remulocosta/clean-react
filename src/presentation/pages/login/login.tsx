import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABXCAMAAAD4QHEDAAAAAXNSR0IB2cksfwAAAjRQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////nRJgAAAAALx0Uk5TAMr/+Ovd0MOqjnFVMIzvr3lGA07gm1YREOLoNKasR2icKvTxgLuuI4HcUUNzBc1/lG1bikIe38kVQGrCMzVQj88SdFOVs2nYuPIg3hlddVzlB8XbKIlJ402GmdaTORxnchoK7n1gYR9jJJLXFzrUC/YOLcQGnWanukvszgHZesb1PqiDoR1eyDEUTIQ7jZGWJ1qf8H480gyxPbVulyUWCKW/hw0P4S7pN75FG7KiLOcmhWsJUq3z7aTHmkrK4NNEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEAklEQVR4nMXad1vTUBQG8GsYgkxFhuJg1AG4QJmCE1AQkelE3BNFBVEUJ05woLhwi+Lee305CxTofe9Nk5yk8fx5z3n7a/u0yU1axvTUMEVn+fj6+Q8PCBwRFKzrcbUqRK/rVqFh4SNHmXQjCG5fjY6Mijbhxoyhws4aGxhLhseZcHtr/ASaO9Gk66y4eIIbn2AeVhIdxuFJFrjOmjzFoDvVGldRkpINuSlWuc6aZsCdPsNCWJmpH56FUXNyql43DYKzTcLKHH1uegYfy2QCDIms+OygHMdcdTlXF4yHrDxN2FUx8+YvkMP+C3W4qRBaxPTCvbVY/rrztd3YRD5SwAzBjBUukclpmvBSPlBUbBRm0Q4JvKxEw8XQcmYYZqxUImsctvGQFccoMFshwmUeX3J5BT9dGUODWZXBl1wNwysZEWbRArwqS316NcyuYWSYBQlyqfqzhK9/xUCDArO1GFpXrjZaA5PrTcG1fpjaoDIZBXMbBzskWNy1BcjnNsERJ2yoRYM3V0JqlXwujp/aUmUWZlsxJt11boOh7W49IrwjFGI7JUO74Loh0r1JhNluiMVJZuAkXLfHCngvxOrFkUIY4TelVHjffsgdwIkGX35gNt+mwiwTcsLlVBjfbzxoEdwEOTxRHIJ+NvTJcA7kavh2LWwrwzFPhvMgd5hv5/PdAiEv7GX0wgxyzVzzCN9MFG+g0OGjfK7FvXeskW9KTpt0+DifG+PeO+Hp3TALn+Rzp9xawUV877SlcAEENw+1WvnOGVmcDp+F4LnBznm+cUG6PaHDgRC8ONBoq+Mb7dI4Hb4EwcsDjSv8+lV5nA53QPCaax0uHNapbH3pcCsE21zrzfzydZU4Hca7Vq5lOAt3qsXpMNzF8e1fLeF3vjdU7wDSYTj9LOlfhU/WTdU4HYar/Ma+xVv84u071sN3INfVt9rFL25Xz5Phu5Br6l2EjfQ9D3kyfB9y1c61mHp+LcUbcCfkenf0cDB74ClPhv0h5/ze5PpwK74PvQE/glgiE45lwv7OEhg2VcpShruwlsfG4Oyh8pR7AjGHANOr24PbIDxfm+CnOPzMHrjnuWzWBhivQJUQe+AXL3H2lT3waxx9wmyB8e6koryxBX4rTL5jdsBTxMl2O+BkcdD1gr0Ly34baPc+nNIlmXs/+KSMVDc+jFsP2Q+Rsuf38ZP8s6BRAqw6Gf85QfrGfCG5OuGv3zpwxzFQ32muCGfzFZTjyA8QhoaqRZvQCRurUKprEv5Bds3BlT3/B76dTnfNwIb/j2ERTPgHihVwd4Q5lwgn5ZhkaXCZw8OPmN6Dyxxav5B7A/75K03PvyAshRN+/0n1eDllEM4Ida+Mbml1lv4t1nyof7E1yTvQ8kJJAAAAAElFTkSuQmCC" alt="4Dev"/>
        <h1>4Dev - Enquetes para Programadores</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua senha" />
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <footer className={Styles.footer}>

      </footer>
    </div>
  )
}

export default Login
