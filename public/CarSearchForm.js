const validators = {
  empty: e => e.target.value.trim() !== "",
}

class CarSearchForm {
  constructor($el) {
    this.$el = $el
    this.$submitButton = $el.querySelector('[type="submit"]')

    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkValidity = this.checkValidity.bind(this)

    this.init()
    this.addListeners()
    this.checkValidity()
  }

  init() {
    this.$el.querySelectorAll('[data-remote]')
  }

  addListeners() {
    this.$el.addEventListener('submit', this.handleSubmit)
    this.$el.addEventListener('input', this.checkValidity)
  }
  removeListeners() {
    this.$el.removeEventListener('submit', this.handleSubmit)
    this.$el.removeEventListener('input', this.checkValidity)
  }

  checkValidity() {
    if (this.isValid) {
      this.$submitButton.removeAttribute('disabled')
    } else {
      this.$submitButton.setAttribute('disabled', 'disabled')
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.isValid) {
      this.$el.submit()
    }
  }

  // Form validation criteria goes here
  get isValid() {
    return [...this.$el.elements]
      .filter($el => ['INPUT', 'SELECT'].includes($el.tagName))
      .some($el => $el.value !== "");
  }
}

window.CarSearchForm = CarSearchForm
