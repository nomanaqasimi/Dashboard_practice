import { useContext } from 'react'
import  ThemeContext  from '../contexts/ThemeContext.jsx'
// import { Link } from 'react-router-dom'
const navbar = "bg-grey-100 dark:bg-gray-900 text-black dark:text-white font-semibold flex justify-end items-center  p-2 w-full"
const themeBtn = "bg-gray-800 dark:bg-gray-800 text-white rounded-xl p-2 inline-flex items-center justify-center m-2"
function Navbar() {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  
  return (
    <nav className= {navbar}>
        <button className={themeBtn} onClick={toggleTheme}>{isDark ? 'light' : 'dark'}</button>
    </nav>
  )
}

export default Navbar