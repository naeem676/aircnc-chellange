import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import NoMatch from './components/noMatch/NoMatch';
import AddExprience from './components/home/experience/addExprience/AddExprience';
import AddHomes from './components/home/homes/addHomes/AddHomes';
import { createContext } from 'react';
import { useState } from 'react';
import BookingPage from './components/bookingPage/BookingPage';
import AddHotel from './components/bookingPage/addHotel/AddHotel';
import Details from './components/details/Details';
import Rules from './components/rules/Rules';
import Traveling from './components/traveling/Traveling';
import BillPay from './components/billPay/BillPay';


export const BookingContext = createContext();
export const UserContext = createContext();
export const HotelContext = createContext();
function App() {
  const [booking, setBooking] = useState({});
  const [loggedUser, setLoggedUser] = useState({})
  const [rooms, setRooms] = useState({})
  return (
    <div className="aap">
      <BookingContext.Provider value={[booking, setBooking]}>
        <UserContext.Provider value={[loggedUser, setLoggedUser]}>
          <HotelContext.Provider value={[rooms, setRooms]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route  path='/addExperience'>
            <AddExprience></AddExprience>
          </Route>
          <Route  path='/addHomes'>
           <AddHomes></AddHomes>
          </Route>
          <Route  path='/booking'>
           <BookingPage></BookingPage>
          </Route>
          <Route  path='/addHotel'>
           <AddHotel></AddHotel>
          </Route>
          <Route  path='/details'>
           <Details></Details>
          </Route>
          <Route  path='/rules'>
           <Rules></Rules>
          </Route>
          <Route  path='/traveling'>
           <Traveling></Traveling>
          </Route>
          <Route  path='/billPay'>
           <BillPay></BillPay>
          </Route>
          <Route  path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      </HotelContext.Provider>
      </UserContext.Provider>
      </BookingContext.Provider>
      
    </div>
  );
}

export default App;
