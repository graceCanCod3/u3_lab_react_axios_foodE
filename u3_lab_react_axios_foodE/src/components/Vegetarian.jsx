import axios from 'axios'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from '../globals'

export default function Vegetarian () {

    let navigate = useNavigate()

    const showVegetarian = (index) => {
        navigate(`${index}`)
    }

    const [vegetarian, setVegetarian] = useState([])

    useEffect(()=> {
        const getVegetarian = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?c=Vegetarian`)
            setVegetarian(response.data.meals)
        }
        getVegetarian()
    },[])

    return (
        <div className = "VegetarianList">
            <h1>Vegetarian food:</h1>
            {
                vegetarian.map((vege,index)=> (
                    <div className="VegetarianDiv" onClick={()=>showVegetarian(index)} key = {index}>
                        <h3>{vege.strMeal}</h3>
                    </div>
                ))
                
            }
        </div>
    )

}