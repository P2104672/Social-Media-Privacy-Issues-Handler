
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/profile">Profile</Link></p>
      <p><Link to="/dashboard">Dashboard</Link></p>
    </>
  )
}

export default Navbar
