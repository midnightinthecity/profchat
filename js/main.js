$(function() {
  let getNewMessages = function() {
    $.get('.netlify/functions/messages',function(data){
      let messages = JSON.parse(data).sort((a, b) => (a['number'] - b['number']))
      console.log(messages)
      let $messageDiv = $('div')
      for (let message of messages) {
        let messageText = `<p>${message.data.who}: ${message.data.message}</p>`
        $messageDiv.append(messageText)
        console.log(messageText)
        console.log($messageDiv.text())
      }
      $('#messages').empty().append($messageDiv)
    })
  }

  getNewMessages()

  setInterval(getNewMessages, 10000)
})

