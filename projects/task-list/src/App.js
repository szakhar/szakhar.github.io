import React from 'react';
import classes from './App.scss';
import List from './List/List'

function App() {
  return (
    <div className={classes.App}>
      <h1>Tasks on day</h1>
      <List/>
    </div>
  );
}

export default App;
