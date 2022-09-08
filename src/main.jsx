import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import './index.css'
import usersReducer from './store/reducers/user-reducer'
import { compose } from 'redux'



const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const userstore = createStore(usersReducer, {
  users: [
    {
      fname: "shlomo",
      lname: "hailo",
      age:29,
      email:"shlomo@skdbvn"

    }]
}, enhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={userstore}>
    <App />
  </Provider>
)
