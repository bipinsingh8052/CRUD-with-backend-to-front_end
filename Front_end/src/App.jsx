import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './component/Home'
import Display from './component/Display'
import Insert from './component/Insert'
import Search from './component/Search'
import UpdatePage from './component/UpdatePage'
import UpdateFrom from './component/UpdateFrom'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='display' element={<Display/>}/>
          <Route path='insert' element={<Insert/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path='update' element={<UpdatePage/>}/>
          <Route path='updatesave/:id' element={<UpdateFrom/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
