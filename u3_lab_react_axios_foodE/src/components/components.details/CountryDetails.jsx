import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from '../../globals'


const CountryDetails = ({ countries }) => {
    let { countryName } = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const getCountryMeals = async () => {
            try {
                const response = await axios.get(`${BASE_URL}filter.php?a=${countryName}`)
                setMeals(response.data.meals)
            } catch (error) {
                console.error("Error fetching meals: ", error)
            }
        }
        getCountryMeals()
    }, [countryName])

    let navigate = useNavigate()

    const showMeal = (mealId) => {
        navigate(`/country/meal/${mealId}`)
    }

    return (
        <div>
            <h1>Meals from {countryName}</h1>
            {meals && meals.length > 0 ? (
                <div className="meals-list">
                    {meals.map((meal) => (
                        <div onClick={()=> showMeal(meal.idMeal)}key={meal.idMeal} className="meal-item">
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No meals found for {countryName}.</p>
            )}
        </div>
    )
}

export default CountryDetails
