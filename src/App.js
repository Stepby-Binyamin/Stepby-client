import styles from './App.module.css';

import { useState } from 'react';
import { BrowserRouter } from "react-router-dom"
import MainRoutes from './routes';

import Layout from './layout';

import { headerTitleContext } from './helper/Context.jsx'

const App = () => {

  const [title, setTitle] = useState()
  const [subtitle, setSubtitle] = useState()

  return (
    <div className={styles.main}>
      <headerTitleContext.Provider value={{title, setTitle, subtitle, setSubtitle}}>
        <BrowserRouter>
          <Layout>
            <MainRoutes />
          </Layout>
        </BrowserRouter>
      </headerTitleContext.Provider>
    </div>
  );
}

export default App;
