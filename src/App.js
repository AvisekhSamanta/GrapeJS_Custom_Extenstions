import React from 'react';
import Studio from './components/views/Studio';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

function App() {
  return (
    <React.Fragment>
      <Header style={styles.outer} />
      <Studio />
      <Footer style={styles.outer} />
    </React.Fragment>
  );
}

const styles = {
  outer: {
    flex: 1,
    background: 'black'
  }
}

export default App;
