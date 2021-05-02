import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MainCart from '../mainCart/MainCart';
import CardApp from '../cardForm/CardApp';

const BillPay = () => {
    return (
       <section>
           <div className="container">
           <div className="d-flex">
                <div className="ml-2"><p class="font-weight-bold">1.Review House Rules <ArrowForwardIosIcon fontSize="small"/></p></div>
                <div className="ml-2"><p class="font-weight-bold">2.Who's coming? <ArrowForwardIosIcon fontSize="small"/></p></div>
                <div className="ml-2"><p class="font-weight-bold">3.Confirm and pay <ArrowForwardIosIcon fontSize="small"/></p></div>
            </div>
               <div className="row">
                   <div className="col-md-6">
                       <h4>Payment Section</h4>
                       <div className="border border-secondary p-2">
                           <CardApp></CardApp>
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

export default BillPay;