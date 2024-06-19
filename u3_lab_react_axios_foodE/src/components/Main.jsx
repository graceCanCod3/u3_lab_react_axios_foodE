import { Route, Routes} from 'react-router-dom'
import React, {useContext} from 'react'
import FoodContext from '../FoodContext'
import Seafood from './Seafood'
import Home from './Home'
import Starter from './Starter'
import Breakfast from './Breakfast'
import Side from './Side'
import Vegan from './Vegan'
import Vegetarian from './Vegetarian'
import Dessert from './Dessert'
import Miscellaneous from './Miscellaneous'
import Pasta from './Pasta'

export default function Main () {
    return (
        <div className = "Main-Container">
            <Routes>
                <Route path ="/" element = {<Home />}/>
                <Route path ="/Seafood" element = {<Seafood />}/>
                <Route path ="/Starters" element = {<Starter />}/>
                <Route path ="/Breakfast" element = {<Breakfast />}/>
                <Route path ="/Sides" element = {<Side />}/>
                <Route path ="/Vegan" element = {<Vegan />}/>
                <Route path ="/Vegetarian" element = {<Vegetarian />}/>
                <Route path ="/Dessert" element = {<Dessert />}/>
                <Route path ="/Miscellaneous" element = {<Miscellaneous />}/>
                <Route path ="/Pasta" element = {<Pasta />}/>
            </Routes>
        </div>
    )
}