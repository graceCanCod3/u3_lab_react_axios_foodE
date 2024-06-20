import Header from "./components/Header"
import Main from './components/Main'
import './App.css'
import { useState, useContext} from 'react'
import FoodContext from "./FoodContext"

function App() {

  const [foodInfo, setFoodInfo] = useState({
    strMeal: "",
    strMealThumb: ""
  })
 

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <FoodContext.Provider value = {{foodInfo, setFoodInfo}}>
      <Main />
      </FoodContext.Provider>

      
    </div>
  )
}

export default App
