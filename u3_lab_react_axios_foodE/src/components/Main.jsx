import { Route, Routes} from 'react-router-dom'
import Seafood from './Seafood'
import Home from './Home'
import Starter from './Starter'

export default function Main () {
    return (
        <div className = "Main-Container">
            <Routes>
                <Route path ="/" element = {<Home />}/>
                <Route path ="/Seafood" element = {<Seafood />}/>
                <Route path ="/Starter" element = {<Starter />}/>
            </Routes>
        </div>
    )
}