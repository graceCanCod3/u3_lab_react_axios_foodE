import axios from "axios"
import {useState, useEffect } from "react"
import { BASE_URL } from '../globals'
import { useNavigate } from "react-router-dom"

export default function Miscellaneous () {
    let navigate = useNavigate()

    const showMisc = (mealId) => {
        navigate(`/Miscellaneous/${mealId}`)
    }

    const [miscs, setMiscs] = useState([])

    useEffect(()=>{
        const getMisc = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?c=Miscellaneous`)
            setMiscs(response.data.meals)
        }
        getMisc()
    },[])

    return (
        <div className="MiscList">
            <h1>Miscellaneous:</h1>
            {
                miscs.map((misc, index) => (
                    <div className="MiscDiv" onClick={()=>showMisc(misc.idMeal)} key = {index}>
                        <h3>{misc.strMeal}</h3>
                    </div>
                ))
            }
        </div>
    )

    
}