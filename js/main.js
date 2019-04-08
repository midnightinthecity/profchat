let getNewMessages = function() {
  $.get('.netlify/functions/messages',function(data){
    let messages = JSON.parse(data).sort((a, b) => (a['number'] - b['number']))
    let $messageDiv = $('div')
    for (let message of messages) {
      $messageDiv.append(`<p>${message.data.who}: ${message.data.message}</p>`)
    }
    $('#messages').empty().append($messageDiv)
  })
}

getNewMessages()

setInterval(getNewMessages, 10000)