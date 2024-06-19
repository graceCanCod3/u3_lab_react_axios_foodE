import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CountryDetails = ({ countries }) => {
    let { id } = useParams()

    const [country, setCountry] = useState(null)

    useEffect(() => {
        if (countries && countries.length > 0) {
            const selectedCountry = countries.find(
                (country) => country.strArea === id
            )
            setCountry(selectedCountry)
        }
    }, [countries, id])

    return country ? (
        <div className="detail">
            <h1 className="detail-name">{country.strArea}</h1>
            <h2>Details</h2>
            <h3 className="holder">Country: {country.strArea}</h3>
        </div>
    ) : (
        <p>Loading country details...</p>
    )
}

export default CountryDetails

