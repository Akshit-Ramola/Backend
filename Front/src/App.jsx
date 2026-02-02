import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
 
  const [ notes, setNotes] = useState([ 
    {
      title: "test title",
      description: "test description"
    },
    {
      title: "test title",
      description: "test description"
    },
    {
      title: "test title",
      description: "test description"
    },
    {
      title: "test title",
      description: "test description"
    }

  ])
  

  return (
    <>
      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
              <h1>title</h1>
              <p>description</p>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
