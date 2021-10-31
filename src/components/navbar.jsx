import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Vidly
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <div className='navbar-nav me-auto mb-2 mb-lg-0'>
              <NavLink className='nav-item nav-link' to='/movies'>
                Movies
              </NavLink>
              <NavLink className='nav-item nav-link' to='/customers'>
                Customers
              </NavLink>
              <NavLink className='nav-item nav-link' to='/rentals'>
                Rentals
              </NavLink>
              <NavLink className='nav-item nav-link' to='/login'>
                Login
              </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
