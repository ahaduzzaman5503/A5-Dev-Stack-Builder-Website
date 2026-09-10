import logoText from "../assets/logo-text.png";

export default function Nevber() {
    const menuClass =
  "text-black font-bold rounded-lg transition duration-300 hover:bg-black hover:text-white focus:bg-white focus:text-black";
    return (
        <>
            <div className= 'bg-white sticky top-0 z-50'>
                <div className= "container mx-auto">
    <div className="navbar text-black shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-black text-white hover:bg-gray-800">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-white text-black rounded-box z-10 mt-3 w-52 p-2 shadow ">
        <li><a className={menuClass}>Home</a></li>
        <li><a className={menuClass}>Technologies</a></li>
        <li><a className={menuClass}>Projects</a></li>
        <li><a className={menuClass}>About</a></li>
        <li><a className={menuClass}>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl group">
        <img src={logoText} alt="logo" 
        className="group-hover:invert transition duration-200"
        />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-black">
      <li><a className={menuClass}>Home</a></li>
     <li><a className={menuClass}>Technologies</a></li>
      <li><a className={menuClass}>Projects</a></li>
      <li><a className={menuClass}>About</a></li>
      <li><a className={menuClass}>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <button className="btn btn-soft border-none bg-white text-black">Sign In</button>
    <button className="btn btn-active btn-secondary rounded-4xl ">Sign Up</button>
  </div>
</div>
                </div>
            </div>
        </>
    )
}