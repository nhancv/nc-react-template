import * as React from 'react'
import './App.css'
import Particles from 'react-particles-js'
import { Button } from 'reactstrap'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Particles className="App-particle" />

          <div className="App-header-body">
            <div className="App-logo" />
            <div className="App-header-info">
              <h1 className="App-title">Nhan Cao</h1>
              <h2 className="App-subtitle">Mobile Developer</h2>
              <h2 className="App-subtitle">nhancv92@gmail.com</h2>
            </div>
          </div>
        </header>
        <div className="App-body">
          <section>
            <p>
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            <div>
              <Button
                color="primary"
                onClick={() => {
                  console.log('hello')
                }}
              >
                Hello
              </Button>
            </div>
          </section>
        </div>

        <footer className="App-footer">
          <div>
            <br />
            <small>---- Nhan Cao ----</small>
            <br />
          </div>
        </footer>
      </div>
    )
  }
}
