import Home from '../routes/Home'
import MainRouter from '../routes/MainRouter'
import Project from '../routes/Project'
import Template from '../routes/Template'
import { Test } from '../routes/Test'
import User from '../routes/User'

function Main() {

   return (
      <>
         <MainRouter />
         <Test />
         {/*<User />
         <Home />
         <Project />
         <Template /> */}
      </>
   )
}

export default Main