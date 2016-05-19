// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//import AppContainer component
import AppContainer from './containers/app.container';

// Search component created as a class
class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

// Render to ID content in the DOM
ReactDOM.render (
  < App />,
  document.getElementById('content')
);
