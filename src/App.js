import React from 'react'
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact'
import Services from './Component/Services/Services'
import About from './Component/About/About'
import Menu from './Component/Menu/Menu'
import { Route,Switch } from 'react-router-dom'




function App() {
  return (
    <>
      <Menu />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route path='/Services' component={Services}/> 
          <Route path='/Contact' component={Contact}/>
        </Switch>
    </>
  )
}

export default App;