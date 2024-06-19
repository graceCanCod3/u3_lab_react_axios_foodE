import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="Nav">
            <Link to="/"> Home </Link>
            <Link to="/Seafood"> Seafood</Link>
            <Link to="/Starters"> Starters</Link>
            <Link to="/Breakfast"> Breakfast</Link>
            <Link to="/Sides"> Sides</Link>
        </div>
    )
}