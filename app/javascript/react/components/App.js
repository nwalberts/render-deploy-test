import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dog from "./Dog.js"

const App = (props) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/dogs/:id" component={Dog}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
