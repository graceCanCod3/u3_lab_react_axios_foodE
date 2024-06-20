import { Link, NavLink } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="Nav">
            <NavLink/>
            <Link to="/"> Home </Link>
            <Link to="/Poultry"> Poultry </Link>
            <Link to="/Beef"> Beef </Link>
            <Link to="/Pork"> Pork </Link>
            <Link to="/Seafood"> Seafood</Link>
            <Link to="/Starters"> Starters</Link>
            <Link to="/Breakfast"> Breakfast</Link>
            <Link to="/Sides"> Sides</Link>
            <Link to="/Vegan"> Vegan </Link>
            <Link to="/Vegetarian"> Vegetarian </Link>
            <Link to="/Dessert"> Dessert</Link>
            <Link to="/Miscellaneous"> Miscellaneous </Link>
            <Link to="/Pasta"> Pasta </Link>
        </div>
    )
}