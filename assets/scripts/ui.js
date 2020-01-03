'use strict'

const showBooksTemplate = require('./templates/book-listing.handlebars')

// const onSuccess = message => {
//   $('#message')
//     .removeClass('failure')
//     .addClass('success')
//     .text(message)
//   $('form').trigger('reset')
// }
//
const onFailure = message => {
  $('#user-message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

const onGetBooksSuccess = (response) => {
  // console.log(response)
  const showBooksHtml = showBooksTemplate({ books: response.books })
  $('#book-div').html(showBooksHtml)
  $('#book-div').show()
  // $('#getSkills1').show()
  // $('.show_skills').hide()
  // $('.hide_skills').show()
}

const onGetBooksFailure = () => {
  onFailure('Something Went Wrong! Are You Sure There Are Stored Skills?')
}

module.exports = {
  onGetBooksSuccess,
  onGetBooksFailure
}
