import { createRoot } from 'react-dom/client'
import './index.css'

function MyFunc(){
  return <h1>This is React</h1>
}

const root = createRoot(document.getElementById('root'))

root.render(
  <main>
    <img src="/src/assets/IceCream.jpeg"/>
    <h1>This is another element</h1>
  </main>
)

// const h1 = document.createElement("h1")
// h1.textContent = "This is impreative coding"
// h1.className = "header"
// document.getElementById("root").appendChild(h1)