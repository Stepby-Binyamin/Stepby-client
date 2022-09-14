import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { ContextProvider } from './context/manageContext';
import Layout from './layout';
import Login from './pages/user/LoginPage';


const App = () => {

  
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
