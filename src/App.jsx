import Header from "./components/Header"
import UserInput from "./components/UserInput"
import ResultsTable from "./components/ResultsTable"
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 1000,
    duration: 10
});

const inputIsValid = userInput.duration >=1;

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevInput => {
      return{
          ...prevInput,
          [inputIdentifier]: +newValue
      }
  })
}

  return (
    <>
      <Header />
      <UserInput 
        userInput={userInput}
        handleChange={handleChange}
      />
      {inputIsValid ? 
        <ResultsTable 
        userInput={userInput} 
        /> : 
        <p className="center">Please enter a duration greater than zero.</p>
      }
    </>
  )
}

export default App
