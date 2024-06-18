import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="Nav">
            <Link to="/"> Home </Link>
            <Link to="/Seafood"> Seafood</Link>
        </div>
    )
}