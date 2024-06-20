import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import { ID_URL } from '../../globals'

export default function BreakfastDetails (props) {
    

    const [recipe, setRecipe] = useState("")
    console.log("props",props)
    let url = ID_URL+props.recipeCode

    let { id } = useParams()

    

    useEffect(() => {
        const getRecipe = async () => {
            const response = await axios.get(`${url}`)
            setRecipe(response.data.meals)
        }
        getRecipe()
    },[])
    
    
    


    return recipe ? (
        <div className="recipeDetail">
            <h3>{recipe.strMeal}</h3>
            <p>{recipe.strInstructions}</p>
            <p>{recipe.strYoutube}</p>

        </div>
    ) : null
}

