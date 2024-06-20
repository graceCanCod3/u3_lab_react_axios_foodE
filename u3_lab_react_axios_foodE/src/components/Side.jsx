import axios from 'axios'
import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'

export default function side () {

    let navigate = useNavigate()

    const showSide = (mealId) => {
        navigate(`/Sides/${mealId}`)
    }

    const [sides, setSides] = useState([])

    useEffect(()=> {
        const getSides = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?c=side`)
            setSides(response.data.meals)
        }
        getSides()
    },[])

    return (
        <div className="SideList">
            <h1> Sides:</h1>
            {
                sides.map((side, index) => (
                    <div className="SideDiv" onClick={()=>showSide(side.idMeal)} key={index}>
                        <h3>{side.strMeal}</h3>
                    </div>
                ))
            }
        </div>

    )

}