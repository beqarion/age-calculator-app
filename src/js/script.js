import get from "./utils/getElement.js"
import calculateAge from "./utils/calculateAge.js"
import validation from "./formValidation/validation.js"

// DOM Elements
const input = {
  dayDOM: get("#birth-date"),
  monthDOM: get("#birth-month"),
  yearDOM: get("#birth-year"),
}

const age = {
  days: get("#result-days"),
  months: get("#result-months"),
  years: get("#result-years"),
}

const form = get("#form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if (!validation(input)) {
    return
  }
  calculateAge()
})
