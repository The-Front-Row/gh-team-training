'use strict'

const api = require('./api.js')
const ui = require('../ui.js')

const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.onGetBooksSuccess)
    .catch(ui.onGetBooksFailure)
}

const addHandlers = () => {
  $('.btn').on('click', onGetBooks)
}

module.exports = {
  addHandlers
}
