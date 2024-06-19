import axios from "axios"
import {useState, useEffect } from "react"
import { BASE_URL } from '../globals'
import { useNavigate } from "react-router-dom"

export default function Dessert () {
    let navigate = useNavigate()

    const showDessert = (index) => {
        navigate(`${index}`)
    }

    const [desserts, setDesserts] = useState([])

    useEffect(()=> {
        const getDesserts = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?c=Dessert`)
            setDesserts(response.data.meals)               

        }
        getDesserts()
    },[])

    return (
        <div className="DessertList">
            <h1>Desserts:</h1>
            {
                desserts.map((dessert,index)=> (
                    <div className="DessertDiv" onClick ={()=>showDessert(index)} key = {index}>
                        <h3>{dessert.strMeal}</h3>
                    </div>
                ))
            }
        </div>
    )
}