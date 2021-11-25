import { useState } from 'react';

import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)

  function handleInput(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setInput('');
    let container = document.getElementById('tag-container')
    let tag = document.createElement('button')
    tag.innerHTML = input
    tag.className = "tag"
    container.appendChild(tag)
    setCount(count+1)
  }

  function handleClear() {
    let allTags = document.querySelectorAll('.tag')
    allTags.forEach(tag => tag.remove())
    setCount(0)
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} type="text" value={input}/>
      </form>
      <div id="tag-container"></div>
      <div id="count">{count} tags created</div>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;
