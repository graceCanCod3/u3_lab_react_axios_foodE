import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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
import Poultry from './Poultry'
import PoultryDetail from './PoultryDetail'
import BeefDetail from './BeefDetail'
import PorkDetail from './PorkDetail'
import Beef from './Beef'
import Pork from './Pork'
import MealsByLetter from './MealsbyLetter'
import  NavLink  from './NavLink'
import Countries from './Countries'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import CountryDetails from './components.details/CountryDetails'
import CountryMeal from './components.details/CountryMeal'
import BreakfastDetails from './components.details/BreakfastDetails'
import SeafoodDetails from './components.details/SeafoodDetails'
import SeafoodMeal from './components.details/components.meals/SeafoodMeal'
import StarterDetails from './components.details/StarterDetails'
import StarterMeal from './components.details/components.meals/StarterMeal'
import SideDetails from './components.details/SideDetails'
import SideMeal from './components.details/components.meals/SideMeal'
import VeganDetails from './components.details/VeganDetails'
import VeganMeal from './components.details/components.meals/VeganMeal'
import VegetarianDetails from './components.details/VegetarianDetails'
import VegetarianMeal from './components.details/components.meals/VegetarianMeal'
import PastaDetails from './components.details/PastaDetails'
import PastaMeal from './components.details/components.meals/PastaMeal'
import MiscellaneousDetails from './components.details/MiscellaneousDetails'
import MiscellaneousMeal from './components.details/components.meals/MiscellaneousMeal'
import DessertDetails from './components.details/DessertDetails'
import DessertMeal from './components.details/components.meals/DessertMeal'



export default function Main () {

    const [countries, setCountries] = useState([])

    useEffect(()=> {
        const getCountries = async () => {
            const response = await axios.get(`${BASE_URL}list.php?a=list`)
            setCountries(response.data.meals)               

        }
        getCountries()
    },[])

    return (
        <div className = "Main-Container">
            <NavLink/>
            <Routes>
                <Route path ="/" element = {<Home />}/>
                <Route path ="/Seafood" element = {<Seafood />}/>
                <Route path ="/Seafood/:mealId" element = {<SeafoodDetails/>}/>
                <Route path ="/Seafood/Meal/:mealId" element = {<SeafoodMeal/>}/>
                <Route path ="/Poultry" element = {<Poultry />}/>
                <Route path ="/Poultry/:mealId" element = {<PoultryDetail />}/>
                <Route path ="/Beef" element = {<Beef />}/>
                <Route path ="/Beef/:mealId" element = {<BeefDetail />}/>
                <Route path ="/Pork" element = {<Pork />}/>
                <Route path ="/Pork/:mealId" element = {<PorkDetail />}/>
                <Route path ="/Starter" element = {<Starter />}/>
                <Route path ="/Starter/:mealId" element = {<StarterDetails/>}/>
                <Route path ="/Starter/Meal/:mealId" element = {<StarterMeal/>}/>
                <Route path ="/Breakfast" element = {<Breakfast />}/>
                <Route path ="/Breakfast/:mealId" element={<BreakfastDetails/>}/>
                <Route path ="/Sides" element = {<Side />}/>
                <Route path ="/Sides/:mealId" element = {<SideDetails/>}/>
                <Route path ="/Sides/Meal/:mealId" element = {<SideMeal/>}/>
                <Route path ="/Vegan" element = {<Vegan />}/>
                <Route path ="/Vegan/:mealId" element = {<VeganDetails/>}/>
                <Route path ="/Vegan/Meal/:mealId" element = {<VeganMeal/>}/>
                <Route path ="/Vegetarian" element = {<Vegetarian />}/>
                <Route path ="/Vegetarian/:mealId" element = {<VegetarianDetails/>}/>
                <Route path ="/Vegetarian/Meal/:mealId" element = {<VegetarianMeal/>}/>
                <Route path ="/Dessert" element = {<Dessert />}/>
                <Route path ="/Dessert/:mealId" element = {<DessertDetails/>}/>
                <Route path ="/Dessert/Meal/:mealId" element = {<DessertMeal/>}/>
                <Route path ="/Miscellaneous" element = {<Miscellaneous />}/>
                <Route path ="/Miscellaneous/:mealId" element = {<MiscellaneousDetails/>}/>
                <Route path ="/Miscellaneous/Meal/:mealId" element = {<MiscellaneousMeal/>}/>
                <Route path ="/Pasta" element = {<Pasta />}/>
                <Route path ="/Pasta/:mealId" element = {<PastaDetails/>}/>
                <Route path ="/Pasta/Meal/:mealId" element = {<PastaMeal/>}/>
                <Route path='/meals/:letter' element={<MealsByLetter/>}/>
                <Route path='/country' element={<Countries countries={countries}/>}/>
                <Route path='/country/:countryName' element={<CountryDetails countries={countries}/>}/>
                <Route path='/country/meal/:mealId' element={<CountryMeal/>}/>
            </Routes>
        </div>
    )
}