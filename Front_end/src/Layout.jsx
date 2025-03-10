
import { Outlet } from 'react-router-dom'
import NavbarComp from './component/NavbarComp'
import Footer from './component/Footer'

export default function Layout() {
  return (
    <div>
       
        <NavbarComp  home="home" display="display" insert="insert" search="search" update="update" />
        <main>
            <Outlet/>
        </main>

        <Footer/>
      
    </div>
  )
}
