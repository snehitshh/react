import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherUser="hello there user"

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  reactElement
)
