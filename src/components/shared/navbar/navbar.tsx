import './navbar.css'

const Navbar = () => {
  return (
    <div className="container">
      <div className="cont-link">
        <a href="#home" className="nav-link">
          <h4>Home</h4>
        </a>
      </div>
      <div className="cont-link">
        <a href="#about" className="nav-link">
          <h4>About</h4>
        </a>
      </div>
      <div className="cont-plus">
        <a href="#plus" className="nav-link">
          <h4>Plus</h4>
        </a>
      </div>
      <div className="cont-link">
        <a href="#projects" className="nav-link">
          <h4>Projects</h4>
        </a>
      </div>
      <div className="cont-link">
        <a href="#menu" className="nav-link">
          <h4>More</h4>
        </a>
      </div>
    </div>
  )
}

export { Navbar }
