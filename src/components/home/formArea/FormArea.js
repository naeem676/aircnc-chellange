import React, { useContext, useState } from 'react';
import './FormArea.css';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveIcon from '@material-ui/icons/Remove';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BookingContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #0baf20d3 30%, #53ff70 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    width:350,
    height: 48,
    padding: '0 30px',
  },
});

const FormArea = () => {
     // The first commit of Material-UI
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [adults, setAdults] = useState(0);
  const [childs, setChilds] = useState(0);
  const [babes, setBabes] = useState(0);
  const [book, setBook] = useState({
      location:'',
  })
  const classes = useStyles();

  const [booking, setBooking] = useContext(BookingContext)



        if(childs < 0){
            setChilds(0)
        }
        if(adults < 0){
            setAdults(0)
        }
        if(babes < 0){
            setBabes(0)
        }


     const handleCheckIn = date =>{
         setCheckIn(date)
         
     }
     const handleCheckOut = date =>{
        setCheckOut(date)
    }

    const handleBlur = e =>{
         const newBook = {...book}
         newBook[e.target.name] = e.target.value;
         setBook(newBook)
    }
    const history = useHistory();
    const handleSubmit = e => {
        const newBook = {...book}
        const totalBook = {location:newBook.location, checkInDate:checkIn.toDateString('dd/MM/yyyy'), checkOutDate:checkOut.toDateString('dd/MM/yyyy'), adultsGuest:adults, childsGuest:childs, babesGuest:babes}
        setBooking(totalBook)
        
        if(newBook.location && checkOut && adults && childs && babes){
            history.push('/booking')
        }
        e.preventDefault()
    }

    const guest = adults + childs + babes;
    

  

    return (
        <div>
            <h4>Where do you want to go ?</h4>
            
            <form className="" onSubmit={handleSubmit}>
            <div className="location_input mt-5">
                    <h6>Location</h6>
                    <input type="text" name="location" onBlur={handleBlur} placeholder="Location" />
                </div>
               
                <div className='date_picker'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-between" flexDirection="row" display="flex">
                        
                    <Grid item xs={12} sm={5}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Check in"
                        format="dd/MM/yyyy"
                        name="checkInDate"
                        value={checkIn}
                        onChange={handleCheckIn}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                    <Grid item xs={12} ml={1}  sm={5}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Check out"
                        format="dd/MM/yyyy"
                        name="checkDate"
                        value={checkOut}
                        onChange={handleCheckOut}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                    
                      </Grid>
                    </MuiPickersUtilsProvider>

                </div>
                <div>
                    <h5>Guest: {guest}</h5>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 pt-2">
                                <h6>ADULTS</h6>
                                </div>
                            <div className="col-sm-6">
                                <IconButton onClick={()=> setAdults(adults - 1)}>
                                <RemoveIcon/>
                                </IconButton>
                                {adults}

                                <IconButton onClick={()=> setAdults(adults + 1)} >
                                <AddSharpIcon/>
                                </IconButton>
                                
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 pt-2">
                                <h6>CHILD</h6>
                                </div>
                            <div className="col-sm-6">
                            <IconButton onClick={()=>setChilds(childs - 1)}>
                                <RemoveIcon/>
                                </IconButton>
                                {childs}

                                <IconButton onClick={()=>setChilds(childs + 1)} >
                                <AddSharpIcon/>
                                </IconButton>
                                
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 pt-2">
                                <h6>BABES</h6>
                                </div>
                            <div className="col-sm-6">
                            <IconButton onClick={()=>setBabes(babes - 1)}>
                                <RemoveIcon/>
                                </IconButton>
                                {babes}

                                <IconButton onClick={()=>setBabes(babes + 1)} >
                                <AddSharpIcon/>
                                </IconButton>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Button className={classes.root} type="submit">
                  
                            <SearchIcon/>
                          
                            Search
                         
                    </Button>
            </form>
        </div>
    );
};

export default FormArea;