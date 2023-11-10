import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ReactGA from 'react-ga4';

type AppProps = {};
type AppState = {};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    ReactGA.send({ hitType: 'pageview', page: '/', title: 'Home' });
    // Send a custom event
    ReactGA.event('did_mount', {
      page: 'app',
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
