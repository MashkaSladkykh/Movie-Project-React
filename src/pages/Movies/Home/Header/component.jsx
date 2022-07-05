const Header = () => {
    return(
        <header className="header">
            <div className="container">
            <div className="header__flex">
                <nav className="menu">
                <ul className="
                menu__list">
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV Shows</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">More</a></li>
                </ul>
                </nav>
                <div className="burger">
                </div>
                <a href=""><img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="logo" className="logo"/></a>
            </div>
            </div>    
      </header>
    )
}

export default Header;