import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">KA</p>
            </NavLink>
            <nav className="flex tect-lg gap-7 font-medium">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-500' : 'text-white'}>
                    ABOUT
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-red-500' : 'text-white'}>
                    PROJECTS
                </NavLink>
                <NavLink to="/resume" className={({ isActive }) => isActive ? 'text-red-500' : 'text-white'}>
                RESUME
                </NavLink>

            </nav>
        </header>
  )
}

export default Navbar