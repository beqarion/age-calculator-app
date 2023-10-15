import get from "./utils/getElement.js"
import isLeap from "./utils/isLeapYear.js"

// DOM Elements
const birth = {
  date: get("#birth-date"),
  month: get("#birth-month"),
  year: get("#birth-year"),
}
const age = {
  days: get("#result-days"),
  months: get("#result-months"),
  years: get("#result-years"),
}

const calculateAge = (dd, mm, yyyy) => {
  const birthYear = new Date(yyyy, mm - 1, dd)
  const dateNow = new Date()
  const ageObj = new Date(dateNow - birthYear)

  const years = ageObj.getFullYear() - 1970
  const months = ageObj.getMonth()
  const days = ageObj.getDate()
  console.log(ageObj.getTime());
  console.log(years, months, days)
}
calculateAge(8, 4, 1985)
