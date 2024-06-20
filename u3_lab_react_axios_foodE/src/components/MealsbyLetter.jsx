import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../Alphabet.css'

const MealsByLetter = () => {
    let { letter } = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get(`${BASE_URL}search.php?f=${letter}`)
                setMeals(response.data.meals)
            } catch (error) {
                console.error('Error fetching meals: ', error)
            }
        }
        fetchMeals()
    }, [letter])

    return (
        <div className="meals-list">
            <h1>Meals starting with "{letter.toUpperCase()}"</h1>
            {meals ? (
                meals.map((meal, index) => (
                    <div key={index} className="meals-item">
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                ))
            ) : (
                <p>No meals found for the letter "{letter.toUpperCase()}".</p>
            )}
        </div>
    )
}

export default MealsByLetter
