import get from "./utils/getElement.js"
import calculateAge from "./utils/calculateAge.js"
import validation from "./formValidation/validation.js"

// DOM Elements
const birthDOM = {
  date: get("#birth-date"),
  month: get("#birth-month"),
  year: get("#birth-year"),
}
const ageDOM = {
  days: get("#result-days"),
  months: get("#result-months"),
  years: get("#result-years"),
}
const form = get("#form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  validation(birthDOM)
})
