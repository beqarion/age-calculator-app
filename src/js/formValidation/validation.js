import isLeap from "../utils/isLeapYear.js"
import MyInput from "../formValidation/MyInputClass.js"

export default function validateForm() {
  // array from DOM-inputs  enclosed in my class
  const inputsArray = Object.values(arguments[0]).map((el) => {
    return new MyInput(el)
  })

  const { date, month, year } = inputsArray.reduce((acc, el) => {
    acc[el.name] = el.inputValue
    return acc
  }, {})

  inputsArray.forEach((el, i, arr) => {
    // year validation
    if (el.name === "year" && year > new Date().getFullYear()) {
      el.errorMessage = "Must be in the past"
    }
    // month validation
    if (el.name === "month" && month && (month < 1 || month > 12)) {
      el.errorMessage = "Must be a valid month"
    }
    // date validation
    if (el.name === "date" && date) {
      if (
        (+month === 2 && (isLeap(year) ? +date > 29 : +date > 28)) ||
        ((+month === 4 || +month === 6 || +month === 9 || +month === 11) &&
          (+date < 1 || +date > 30)) ||
        +date < 1 ||
        +date > 31
      ) {
        el.errorMessage = "Must be a valid day"
      }
    }
    el.selfValidate()
  })

  console.log(inputsArray.map((e) => e.errorMessage))
  console.log(inputsArray);
  return inputsArray
}
