import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"

const MainLayout = ({ children }) => {
  return (
    <div className='container-fluid'>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
