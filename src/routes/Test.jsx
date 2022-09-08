
import { Route, Routes } from 'react-router-dom'
import Shaul from './TestComponents/Shaul'
import Nehorai from './TestComponents/Nehorai'
import Michal from './TestComponents/Michal'
import Efrat from './TestComponents/Efrat'
import Yossef from './TestComponents/Yossef'
import Yehoshua from './TestComponents/Yehoshua'
import Shmuel from './TestComponents/Shmuel'
import Ariel from './TestComponents/Ariel'
import Oriya from './TestComponents/Oriya'
import Bezalel from './TestComponents/Bezalel'
import Eldad from './TestComponents/Eldad'
import Yael from './TestComponents/Yael'
import Aviad from './TestComponents/Aviad'

export const Test = () => {

   return (
      <Routes>
         <Route path='/' element={<Shaul />} />
         <Route path='/nehorai' element={<Nehorai />} />
         <Route path='/michal' element={<Michal />} />
         <Route path='/efrat' element={<Efrat />} />
         <Route path='/yossef' element={<Yossef />} />
         <Route path='/yehoshua' element={<Yehoshua />} />
         <Route path='/shmuel' element={<Shmuel />} />
         <Route path='/ariel' element={<Ariel />} />
         <Route path='/oriya' element={<Oriya />} />
         <Route path='/bezalel' element={<Bezalel />} />
         <Route path='/eldad' element={<Eldad />} />
         <Route path='/yael' element={<Yael />} />
         <Route path='/aviad' element={<Aviad />} />
         <Route path='*' element={<></>} />
      </Routes>
   )
}
