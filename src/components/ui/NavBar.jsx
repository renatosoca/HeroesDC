import { NavLink, useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate( '/login', { replace: true } );
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <NavLink
          to="/"
          className={ ({ isActive }) => `header__logo ${ isActive ? 'active' : '' }` }
        >
          Marvel
        </NavLink>

        <nav className='navbar'>
          <NavLink
            to="/dc"
            className={ ({ isActive }) => `navbar__link ${ isActive ? 'active' : '' }` }
          >
            Dc Comics
          </NavLink>
          
          <NavLink
            to="/marvel"
            className={ ({ isActive }) => `navbar__link ${ isActive ? 'active' : '' }` }
          >
            Marvel Comics
          </NavLink>
        </nav>

        <div className="header__options">
          <NavLink
            to="/search"
            className={ ({ isActive }) => `header__link ${ isActive ? 'active' : '' }` }
          >
            Buscar
          </NavLink>

          <span
            className="header__user"
          >
            Hola <strong>Renato</strong>
          </span>

          <button
            className="header__logout"
            onClick={ handleLogout }
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBar