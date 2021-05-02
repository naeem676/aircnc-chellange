import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MainCart from '../mainCart/MainCart';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import manager from "../image/men.jpg";
import './Traveling.css';
import { useHistory } from 'react-router-dom';

const useButtonStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #0baf20d3 30%, #53ff70 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      width:200,
      height: 48,
      padding: '0 30px',
    },
  });

  const useAvatarStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const Traveling = () => {
    const buttonClasses = useButtonStyles();
    const avatarClasses = useAvatarStyles();
    const history = useHistory()
    const handleContinue = () => {
        history.push('/billPay')
    }
    return (
        <section>
            <div className="container">
            <div className="d-flex">
                <div className="ml-2"><p class="font-weight-bold">1.Review House Rules <ArrowForwardIosIcon fontSize="small"/></p></div>
                <div className="ml-2"><p class="font-weight-bold">2.Who's coming? <ArrowForwardIosIcon fontSize="small"/></p></div>
                <div className="ml-2"><p>3.Confirm and pay <ArrowForwardIosIcon fontSize="small"/></p></div>
            </div>
            <h2>Traveling for work?</h2>
                <div className="row">
                    
                    <div className="col-md-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9">
                                    <p>Say hello to your host</p>
                                    <p>Let Rowdra know a little yourself and why you're coming.</p>
                                    <input className="input" type="text"/><br/>
                                    <Button onClick={handleContinue}  className={buttonClasses.root} >Continue</Button>
                                </div>
                                <div className="col-md-3">
                                <Avatar alt="Remy Sharp" src={manager} className={avatarClasses.large} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <MainCart></MainCart>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Traveling;