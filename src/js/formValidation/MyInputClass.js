// prototypal inheritance

// export default function MyInput(el) {
//   this.name = el.name
//   this.inputElement = el
//   this.inputValue = el.value
//   this.inputNumberValue = +el.value
//   this.parentElement = el.parentNode
//   this.unmodifiedParent = this.parentElement.innerHTML
//   this.errorMessage = null
//   this.simpleValidation()
// }
// MyInput.prototype.simpleValidation = function () {
//   if (this.inputValue === "") {
//     return (this.errorMessage = "This field is required")
//   } else if (!+this.inputValue && this.inputValue !== "0") {
//     return (this.errorMessage = "The input must be a number")
//   }
// }

// end of prototypal inheritance

export default class MyInput {
  constructor(el) {
    this.inputElement = el
    this.name = el.name

    this.inputValue = el.value
    this.inputNumberValue = +el.value

    this.parentElement = el.parentNode
    this.unmodifiedParent = this.parentElement.innerHTML
    this.errorMessage = null
    this.inputElement.addEventListener("blur", this.selfValidate.bind(this))
    this.inputElement.addEventListener(
      "change",
      this.initialValidation.bind(this)
    )
    this.initialValidation()
  }
  initialValidation() {
    this.updateInputValue()

    if (this.inputValue === "") {
      return (this.errorMessage = "This field is required")
    } else if (!+this.inputValue && this.inputValue !== "0") {
      return (this.errorMessage = "The input must be a number")
    } else {
      this.errorMessage = null
    }
  }
  selfValidate() {
    if (!this.errorMessage) {
      this.initialValidation()
    }

    if (this.errorMessage) {
      this.parentElement.classList.add("validation-error")
      const errEl = document.createElement("p")
      errEl.classList.add("error-text")
      if (this.parentElement.childElementCount === 3) {
        this.parentElement.lastElementChild.innerText = this.errorMessage
      } else {
        errEl.innerText = this.errorMessage
        this.parentElement.appendChild(errEl)
      }
    } else {
      this.parentElement.classList.remove("validation-error")
      if (this.parentElement.childElementCount >= 3) {
        this.parentElement.removeChild(this.parentElement.lastElementChild)
      }
    }
  }
  updateInputValue() {
    this.inputValue = this.inputElement.value
    this.inputNumberValue = +this.inputElement.value
  }
}
