import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from '../../../globals'
import { ID_URL } from "../../../globals"


const SideMeal = ({ countries }) => {
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

    const renderIngredients = (mealItem) => {
        const ingredients = []
        for(let i = 0; i <= 20; i++){
        const ingredient = mealItem[(`strIngredient${i}`)]
        const measure = mealItem[(`strMeasure${i}`)]
        if(ingredient && ingredient.trim() && measure && measure.trim()) {
            ingredients.push(
                <li key={i}>{measure} {ingredient}</li>
            )
        }
    }
    return ingredients
}
    return (
        <div>
            {meal && meal.length > 0 ? (
                <div className="meals-list">
                    {meal.map((mealItem) => (
                        <div key={mealItem.idMeal} className="meal-item">
                            <h3>{mealItem.strMeal}</h3>
                            <img src={mealItem.strMealThumb} alt={meal.strMeal} />
                            <ul className="ingredients">
                                <h3 className="ingredient-tag">Ingredients:</h3>
                                {renderIngredients(mealItem)}
                            </ul>
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

export default SideMeal