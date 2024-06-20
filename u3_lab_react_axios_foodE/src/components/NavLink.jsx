import { Link } from 'react-router-dom'

const AlphabetNav = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    return (
        <div className="alphabet-nav">
            {letters.map((letter) => (
                <Link to={`/meals/${letter.toLowerCase()}`} key={letter} className="nav-link">
                    {letter}
                </Link>
            ))}
        </div>
    )
}

export default AlphabetNav
