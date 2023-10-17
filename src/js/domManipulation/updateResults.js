// update results based on errors you have
export default function updateResults(resultsDOM, results, haveError) {
  resultsDOM.years.innerText = results.years
  resultsDOM.months.innerText = results.months
  resultsDOM.days.innerText = results.days
}
