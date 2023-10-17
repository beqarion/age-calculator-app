import get from "./utils/getElement.js"
import calculateAge from "./utils/calculateAge.js"
import validateAll from "./formValidation/validation.js"
import updateResults from "./domManipulation/updateResults.js"
import initialAnimation from "./animations/initialAnimation.js"
// DOM Elements
const input = {
  dayDOM: get("#birth-date"),
  monthDOM: get("#birth-month"),
  yearDOM: get("#birth-year"),
}

const age = {
  years: get("#result-years"),
  months: get("#result-months"),
  days: get("#result-days"),
}

const form = get("#form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const inputsArray = validateAll(input)

  const resultValues = inputsArray.reduce((acc, el) => {
    acc[el.name] = el.inputNumberValue
    return acc
  }, {})

  const isThereError = inputsArray.some((el) => {
    return el.errorMessage
  })

  if (!isThereError) {
    console.log(calculateAge(resultValues))
    const results = calculateAge(resultValues)
    updateResults(age, results)
  }
})
// document.addEventListener("DOMContentLoaded", initialAnimation)
