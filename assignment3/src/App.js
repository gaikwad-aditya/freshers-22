import React from 'react';
import './App.css';
import { Footer, Home, Login, Navbar, ListHotel, Register, UserLogin, UserSignUp, BookingList} from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <div >
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route exact path='/register'>
                <Register/>
              </Route>
              <Route exact path='/hotelList'>
                <ListHotel/>
              </Route>
              <Route exact path='/login'>
                <Login/>
              </Route>
              <Route exact path='/userLogin'>
                <UserLogin/>
              </Route>
              <Route exact path='/userSignUp'>
                <UserSignUp/>
              </Route>
              <Route exact path='/bookingList'>
                <BookingList/>
              </Route>
            </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
