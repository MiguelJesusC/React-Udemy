import React from 'react';
import PropTypes from 'prop-types'
import './App.css';

function App({saludo, subtitulo}) {

  return (
    <React.Fragment>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </React.Fragment>
    );
}

App.propTypes = {
  saludo:PropTypes.string.isRequired
}

App.defaultProps = {
  subtitulo : 'Soy un subtitulo'
}
export default App;
