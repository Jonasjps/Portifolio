const typing = document.querySelector('[data-js="typing"]')

const messages = ['Jonas Pessoa']

let messageIndex = 0
let characterIndex = 0
let currentMessage = ''
let currentCharacters = ''


const type = () => {
  const shouldTypeFirstMessage = messageIndex === messages.length
  
  if(shouldTypeFirstMessage){
    messageIndex = 0
  }

  currentMessage = messages[messageIndex]
  currentCharacters = currentMessage.slice(0, characterIndex++)
  typing.innerHTML = currentCharacters
  console.log(currentCharacters)

//   const shouldChangeMessageToBeTyped =
//     currentCharacters.length === currentMessage.length

//   if( shouldChangeMessageToBeTyped ){
//     messageIndex++
//     characterIndex = 0
//   }
}

setInterval(type, 200)