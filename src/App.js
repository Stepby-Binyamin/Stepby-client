import React, { useEffect } from 'react';
import styles from './App.module.css';
import { ContextProvider } from './context/manageContext';
import Layout from './layout';
import languageFunc from './functions/languageFunc'

const App = () => {

  useEffect(() => {
    languageFunc()
  }, [])
  
  return (
    <div className={styles.main}>
      <ContextProvider>
        <Layout />
      </ContextProvider>
    </div>
  );
}
export default App;