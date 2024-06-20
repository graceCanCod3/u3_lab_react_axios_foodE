import axios from "axios"
import {useState, useEffect } from "react"
import { BASE_URL } from '../globals'
import { useNavigate } from "react-router-dom"

export default function Countries ({countries}) {
    let navigate = useNavigate()

    const showCountries = (countryName) => {
        navigate(`/country/${countryName}`)
    }

    

    return (
        <div className="CountryList">
            <h1>Countries:</h1>
            {
                countries.map((country,index)=> (
                    <div className="countriesDiv" onClick ={()=>showCountries(country.strArea)} key = {index}>
                        <h3>{country.strArea}</h3>
                    </div>
                ))
            }
        </div>
    )
}