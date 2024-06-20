import { Route, Routes} from 'react-router-dom'
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
import Beef from './Beef'
import Pork from './Pork'

export default function Main () {
    return (
        <div className = "Main-Container">
            <Routes>
                <Route path ="/" element = {<Home />}/>
                <Route path ="/Seafood" element = {<Seafood />}/>
                <Route path ="/Poultry" element = {<Poultry />}/>
                <Route path ="/Beef" element = {<Beef />}/>
                <Route path ="/Pork" element = {<Pork />}/>
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