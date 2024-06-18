import { Route, Routes} from 'react-router-dom'
import Seafood from './Seafood'
import Home from './Home'

export default function Main () {
    return (
        <div className = "Main-Container">
            <Routes>
                <Route path ="/" element = {<Home />}/>
                <Route path ="/Seafood" element = {<Seafood />}/>
            </Routes>
        </div>
    )
}