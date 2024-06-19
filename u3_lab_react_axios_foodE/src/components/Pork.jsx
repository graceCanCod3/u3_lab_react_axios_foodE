import { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../globals"
import { useNavigate } from "react-router-dom"

export default function Pork () {
    let navigate = useNavigate()
    const showPork = (index) => {
        navigate(`${index}`)
    }

    const [porks, setPorks] = useState([])

    useEffect (()=> {
        const getPork = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?c=pork`)
            setPorks(response.data.meals)
        }
        getPork()
    },[])

    return (
        <div className="protein">
            <h1>Protein Type: Pork</h1>
            {
                porks.map((pork,index)=> (
                    <div className="pork" onClick={()=>showPork(index)} key = {index}>
                        <h3>{pork.strMeal}</h3>
                    </div>
                ))
            }
        </div>
    )
}