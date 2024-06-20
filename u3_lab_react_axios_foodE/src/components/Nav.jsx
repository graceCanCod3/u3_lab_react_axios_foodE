import { Link, NavLink } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="Nav">
            <NavLink/>

            <Link to="/" className='nav-item'> Home </Link>
            <Link to="/Poultry" className='nav-item'> Poultry </Link>
            <Link to="/Beef" className='nav-item'> Beef </Link>
            <Link to="/Pork" className='nav-item'> Pork </Link>
            <Link to="/Seafood"className='nav-item'> Seafood</Link>
            <Link to="/Starters"className='nav-item'> Starters</Link>
            <Link to="/Breakfast"className='nav-item'> Breakfast</Link>
            <Link to="/Sides"className='nav-item'> Sides</Link>
            <Link to="/Vegan"className='nav-item'> Vegan </Link>
            <Link to="/Vegetarian"className='nav-item'> Vegetarian </Link>
            <Link to="/Dessert"className='nav-item'> Dessert</Link>
            <Link to="/Miscellaneous"className='nav-item'> Miscellaneous </Link>
            <Link to="/Pasta"className='nav-item'> Pasta </Link>
            <Link to='/country'className='nav-item'>Countries</Link>
        </div>
    )
}