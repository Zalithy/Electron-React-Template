import { useRef } from "react"
import './styles/index.scss'

export const App = () => {
  const input = useRef<HTMLInputElement>();

  return (
    <>
      <h1>Hello world!</h1>
      <input type="text" ref={input}/>
      <button onClick={() => window.api.test(input.current.value)}>Console!</button>
    </>
  )
}