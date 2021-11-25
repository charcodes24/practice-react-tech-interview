import { useState } from 'react';

import './App.css';

function App() {
  const [input, setInput] = useState('')

  function handleInput(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setInput("");
    let container = document.getElementById('tags')
    let tag = document.createElement('button')
    tag.innerHTML = input
    container.appendChild(tag)
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} type="text" />
      </form>
      <div id="tags">

      </div>
      <button>Clear</button>
    </div>
  );
}

export default App;
