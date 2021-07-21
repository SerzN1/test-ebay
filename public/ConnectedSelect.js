const API_URL = '/api'

class RemoteSelect {
  constructor($el) {
    this.$el = $el
    this.fetchRemote = this.fetchRemote.bind(this)
    this.data = $el.dataset

    if (this.data.dependancyId) {
      this.$dependancyItem = this.$el.form.elements[this.data.dependancyId]
    }

    this.emptyOption = {
      id: this.$el.value,
      title: this.$el.options[$el.selectedIndex].textContent
    }
    this.defaultOption = {
      id: this.data.defaultValue || this.$el.value,
      title: this.data.defaultTitle || this.$el.options[$el.selectedIndex].label,
    }

    this.addListeners()
    this.fetchRemote()
  }

  async fetchRemote() {
    let apiUrl = `${API_URL}/${this.data.api}`
    if (this.$dependancyItem) {
      // Dependancies might be more complex then single item
      if (this.$dependancyItem.value) {
        apiUrl += `?${this.data.dependancyId}=${this.$dependancyItem.value}`
        //  Using fakefetch instead of the real one
        const data = await fakeFetch(apiUrl)
        this.render([this.defaultOption].concat(data))
      } else {
        this.render([this.emptyOption])
      }
    } else {
      const data = await fakeFetch(apiUrl)
      this.render([this.emptyOption].concat(data));
    }
  }

  render(data) {
    const opts = data.map((d, i) => {
      return `<option value="${d.id}" ${!i && 'selected'}>${d.title}</option>`
    })
    this.$el.innerHTML = opts.join('')
  }

  addListeners() {
    if (this.$dependancyItem) {
      this.$dependancyItem.addEventListener('change', this.fetchRemote)
    }
  }
  removeListeners() {
    if (this.$dependancyItem) {
      this.$dependancyItem.removeEventListener('change', this.fetchRemote)
    }
  }
  destroy() {
    this.removeListeners()
    this.data = undefined
    this.emptyOption = undefined
    this.defaultOption = undefined
  }
}

window.ConnectedSelect = ConnectedSelect