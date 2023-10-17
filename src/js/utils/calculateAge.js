export default ({ date, month, year }) => {
  const birthYear = new Date(year, month - 1, date)
  // to calculate ages beyond normal lifespan
  birthYear.setFullYear(year)
  const dateNow = new Date()
  let ageInMs = dateNow - birthYear
  console.log(ageInMs)

  const MILISECONDSINYEAR = 1000 * 60 * 60 * 24 * 365.25
  const MILISECONDSINMONTH = 1000 * 60 * 60 * 24 * 30.4375
  const MILISECONDSINDAY = 1000 * 60 * 60 * 24

  const years = Math.floor(ageInMs / MILISECONDSINYEAR)
  ageInMs -= years * MILISECONDSINYEAR

  const months = Math.floor(ageInMs / MILISECONDSINMONTH)
  ageInMs -= months * MILISECONDSINMONTH

  const days = Math.floor(ageInMs / MILISECONDSINDAY)

  return { years, months, days }
}
