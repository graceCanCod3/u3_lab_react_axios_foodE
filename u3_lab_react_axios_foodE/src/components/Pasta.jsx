import axios from "axios"
import {useState, useEffect } from "react"
import { BASE_URL } from '../globals'
import { useNavigate } from "react-router-dom"

export default function Pasta () {
    let navigate = useNavigate()

    const showPasta = (mealId) => {
        navigate(`/Pasta/${mealId}`)
    }

    const [pastas, setpastas] = useState([])

    useEffect(()=> {
        const getPasta = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?c=pasta`)
            setpastas(response.data.meals)

        }
        getPasta()
    },[])


    return (
        <div className ="PastaList">
            <h1>Pasta:</h1>
            {
                pastas.map((pasta, index) => (
                    <div className="PastaDiv" onClick={()=>showPasta(pasta.idMeal)} key = {index}>
                        <h3>{pasta.strMeal}</h3>
                        </div>
                ))
            }
        </div>
    )


}