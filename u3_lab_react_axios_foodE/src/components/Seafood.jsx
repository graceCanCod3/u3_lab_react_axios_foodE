import axios from "axios"
import {useState, useEffect } from "react"
import { BASE_URL } from '../globals'
import { useNavigate } from "react-router-dom"

export default function Seafood () {

    let navigate = useNavigate()

    const showSeafood = (index) => {
        navigate(`${index}`)
    }

    const [seafoods, setSeafood] = useState([])

    useEffect(()=>{
        const getSeafood = async () => {
            const response = await axios.get(`${BASE_URL}filter.php?c=Seafood`)
            setSeafood(response.data.results)
        }
        getSeafood()
    }, [])
    console.log('seafood', seafoods)

    return (
        <div className="SeafoodList">
            <h1>Seafood:</h1>
            {
                seafoods.map((seafood, index)=> (
                    <div className="SeafoodDiv" onClick={()=>showSeafood(index)} key ={index}>
                        <h3>{seafood.strMeal}</h3>
                    </div>
                ))
            }
        </div>
    )

}
