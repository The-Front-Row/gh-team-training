'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.btn').on('click', onGetBooks)
}

module.exports = {
  addHandlers
}
