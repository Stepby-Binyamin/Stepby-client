import styles from './App.module.css';
import { ContextProvider } from './context/manageContext';
import Layout from './layout';
// import Login from './login';


  const App = () => {

  return (
    <div className={styles.main}>
      <ContextProvider>
        <Layout />
      </ContextProvider>
      {/* <Login/> */}
    </div>
  );
}

export default App;
