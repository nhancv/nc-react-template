import * as React from 'react'
import './App.css'

// const logo = require('./profile.jpg')

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo" />
          <div className="App-header-info">
            <h1 className="App-title">Nhan Cao</h1>
            <h2 className="App-subtitle">Mobile Developer</h2>
            <h2 className="App-subtitle">nhancv92@gmail.com</h2>
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
