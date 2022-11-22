import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { ContextProvider } from './context/manageContext';
import Layout from './layout';
import Login from './pages/user/LoginPage';
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
      {/* <Login/> */}
      {/* <Routes>
        <Route path='/' element={Navigate('/login')}/>
        <Route path='/login' element={<Login/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
