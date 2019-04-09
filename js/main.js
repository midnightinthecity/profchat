$(function() {
  let getNewMessages = function() {
    $.get('.netlify/functions/messages',function(data){
      let messages = JSON.parse(data).sort((a, b) => (a['id'] - b['id']))
      let $messageDiv = $('<div>')
      for (let message of messages) {
        let $p = $(`<p>${message.username}: ${message.text}</p>`)
        $messageDiv.append($p)
      }
      $('#messages').empty().append($messageDiv)
    })
  }

  getNewMessages()

  setInterval(getNewMessages, 10000)
})

