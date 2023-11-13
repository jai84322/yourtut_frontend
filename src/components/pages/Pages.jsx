import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
// import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Login from "../common/login/Login"
import Signup from "../common/signup/Signup"
import Bookfreetrial from "../trial/bookfreetrial"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/about' component={About} />
          {/* <Route exact path='/blog' component={Blog} /> */}
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/book-free-trial' component={Bookfreetrial} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
