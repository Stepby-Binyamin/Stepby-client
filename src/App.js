import styles from './App.module.css';
import { BrowserRouter } from "react-router-dom"
import MainRoutes from './routes';
import Layout from './layout';

const App = () => {

  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Layout>
          <MainRoutes />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
