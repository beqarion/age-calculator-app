import isLeap from "../utils/isLeapYear.js"

// prototypal inheritance
function MyInput(el) {
  this.name = el.name
  this.inputElement = el
  this.inputValue = el.value
  this.inputNumberValue = +el.value
  this.parentElement = el.parentNode
  this.unmodifiedParent = this.parentElement.innerHTML
  this.errorMessage = null
  this.simpleValidation()
}
MyInput.prototype.simpleValidation = function () {
  if (this.inputValue === "") {
    return (this.errorMessage = "This field is required")
  } else if (!+this.inputValue && this.inputValue !== "0") {
    return (this.errorMessage = "The input must be a number")
  }
}
// end of prototypal inheritance

export default function validateForm() {
  // array from inputs enclosed in my class
  const inputsArray = Object.values(arguments[0]).map((el) => {
    return new MyInput(el)
  })

  const { date, month, year } = inputsArray.reduce((acc, el) => {
    acc[el.name] = el.inputNumberValue
    return acc
  }, {})

  inputsArray.forEach((el, i, arr) => {
    // year validation
    if (el.name === "year" && year > new Date().getFullYear()) {
      el.errorMessage = "Must be in the past"
    }
    // month validation
    if (el.name === "month" && (month > 1 || month > 12)) {
      console.log(date, month, year)
      el.errorMessage = "Must be a valid month"
    }
    // date validation
    // if (el.name === "date" && month === 2) {
    //   if (isLeap(year)) {
    //     if (date > 28 || date <= 0) {
    //       el.errorMessage = "Must be a valid day"
    //     }
    //   } else if (date > 29 || date <= 0) {
    //     el.errorMessage = "Must be a valid day"
    //   }
    // } else if (
    //   el.name === "date" &&
    //   (month === 4 || month === 6 || month === 9 || month === 11) &&
    //   (date < 1 || date > 30)
    // ) {
    //   el.errorMessage = "Must be a valid day"
    // } else if (el.name === "date" && (date < 1 || date > 31)) {
    //   el.errorMessage = "Must be a valid day"
    // }
    if (el.name === "date") {
      if (
        (month === 2 && (isLeap(year) ? date > 29 : date > 28)) ||
        ((month === 4 || month === 6 || month === 9 || month === 11) &&
          (date < 1 || date > 30)) ||
        date < 1 ||
        date > 31
      ) {
        el.errorMessage = "Must be a valid day"
      }
    }
  })

  const isThereError = inputsArray.some((el) => {
    return el.errorMessage
  })
  console.log(inputsArray.map((e) => e.errorMessage))
}
