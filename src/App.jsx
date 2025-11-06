import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const topics = ['basic', 'single page', 'rendering', 'dom', 'jsx']

  return (
    <>
      <h1>React Tutorial</h1>
      <div>
    
        <table border="">
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        
          <thead>
            <tr>
              <th>Topics</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((topic, index) => (
              <tr key={index}>
                <td>{topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
