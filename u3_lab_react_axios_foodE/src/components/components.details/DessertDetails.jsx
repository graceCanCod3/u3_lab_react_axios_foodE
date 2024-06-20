import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from '../../globals'


const DessertDetails = ({ countries }) => {
    let { mealId } = useParams()
    const [meal, setMeal] = useState([])

    useEffect(() => {
        const getDessertMeal = async () => {
            try {
                const response = await axios.get(`${BASE_URL}lookup.php?i=${mealId}`)
                setMeal(response.data.meals)
            } catch (error) {
                console.error("Error fetching meals: ", error)
            }
        }
        getDessertMeal()
    }, [mealId])

    let navigate = useNavigate()


    return (
        <div>
            {meal && meal.length > 0 ? (
                <div className="meals-list">
                    {meal.map((meal) => (
                        <div key={meal.idMeal} className="meal-item">
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No meals found for.</p>
            )}
        </div>
    )
}

export default DessertDetails
