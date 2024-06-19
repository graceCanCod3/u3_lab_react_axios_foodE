import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL } from '../globals'
import { useNavigate } from "react-router-dom"

export default function CountryList() {
    let navigate = useNavigate()

    const showCountry = (countryName) => {
        navigate(`/country/${countryName}`)
    }

    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await axios.get(`${BASE_URL}list.php?a=list`)
                setCountries(response.data.meals)
            } catch (error) {
                console.error("Error fetching countries: ", error)
            }
        }
        getCountries()
        console.log(countries)
    }, [])

    return (
        <div className="countryList">
            <h1>Countries:</h1>
            {countries.length > 0 ? (
                countries.map((country, index) => (
                    <div className="countryDiv" onClick={() => showCountry(country.strArea)} key={index}>
                        <h3>{country.strArea}</h3>
                    </div>
                ))
            ) : (
                <p>Loading countries...</p>
            )}
        </div>
    )
}
