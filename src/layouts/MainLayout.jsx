import { NavBar } from "../components/NavBar"

const MainLayout = ({ children }) => {
  return (
    <div className='container-fluid'>
      <NavBar />
      {children}
    </div>
  )
}

export default MainLayout
