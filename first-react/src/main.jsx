import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// function MyFunc(){
//   return <h1>This is React</h1>
// }

// const root = createRoot(document.getElementById('root'))

// root.render(
//   <StrictMode>
//     <MyFunc />
//   </StrictMode>,
// )

const h1 = document.createElement("h1")
h1.textContent = "This is impreative coding"
h1.className = "header"
document.getElementById("root").appendChild(h1)