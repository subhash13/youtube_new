import "../styles/navbar.css"
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img width={150} src="/images/logo.png" alt="" />
            </div>
            <div className="search">
                <input type="text" placeholder="search" />
            </div>
            <div className="options">
                <button>Add Video</button>
                <button>Sign In</button>
            </div>
        </div>
     );
}
 
export default Navbar;