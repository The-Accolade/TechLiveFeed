import Logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand" href="https://"><img src={Logo} alt="Logo" style={{ height: "40px" }} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">TechLiveFeed</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <ul className="navbar-nav justify-content-end flex-grow-1 mt-3 pe-3">
                <li className="nav-item navigation">
                  <a className="nav-link active" aria-current="page" href="https://">Home</a>
                </li>
                <li className="nav-item navigation">
                  <a className="nav-link" href="https://">Events</a>
                </li>
                <li className="nav-item navigation">
                  <a className="nav-link" href="https://">Posts</a>
                </li>
                <li className="nav-item navigation">
                  <a className="nav-link" href="https://">Trending</a>
                </li>
                <li className="nav-item navigation">
                  <a className="nav-link" href="https://">Contact</a>
                </li>
                { /* <li className="nav-item navigation dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;