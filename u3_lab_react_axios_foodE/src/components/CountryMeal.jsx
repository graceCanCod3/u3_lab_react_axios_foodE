import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from '../globals'
import { ID_URL } from "../globals"


const CountryMeal = ({ countries }) => {
    let { mealId } = useParams()
    const [meal, setMeal] = useState([])

    useEffect(() => {
        const getMeal = async () => {
            try {
                const response = await axios.get(`${ID_URL}${mealId}`)
                setMeal(response.data.meals)
            } catch (error) {
                console.error("Error fetching meals: ", error)
            }
        }
        getMeal()
    }, [mealId])

    return (
        <div>
            {meal && meal.length > 0 ? (
                <div className="meals-list">
                    {meal.map((mealItem) => (
                        <div key={mealItem.idMeal} className="meal-item">
                            <h3>{mealItem.strMeal}</h3>
                            <img src={mealItem.strMealThumb} alt={meal.strMeal} />
                            <p>{mealItem.strYoutube}</p>
                            <p>{mealItem.strInstructions}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No meals found for .</p>
            )}
        </div>
    )
}

export default CountryMeal