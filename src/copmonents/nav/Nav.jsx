
import "./Nav.css"


import searchImg from '../../images/search.svg'
import nav__log__1 from '../../images/navlogo1.svg'
import nav__log__2 from '../../images/navlogo2.svg'
import nav__log__3 from '../../images/navlogo3.svg'


const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__content__main">
          <div className="nav__content">
            <div className="nav__left__content">
              <div className="nav__logo">
                <img src={nav__log__1} alt="logo" />
                <img src={nav__log__2} alt="logo" />
                <img src={nav__log__3} alt="logo" />
              </div>
              <div className="nav__search__content">
                <img src={searchImg} alt="search" />
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className="nav__rigth__content">
              <ul className="nav__content__list">
                <li><a className="nav__content__list__item__link" href="#">Explore</a></li>
                <li><a className="nav__content__list__item__link" href="#">Trending</a></li>
                <li><a className="nav__content__list__item__link" href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
