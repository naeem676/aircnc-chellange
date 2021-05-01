import React, { useContext } from 'react';
import StarIcon from '@material-ui/icons/Star';
import './HotelDetails.css'
import { HotelContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const HotelDetails = ({hotel}) => {
    const [rooms, setRooms] = useContext(HotelContext)
    const {title, cost, star, image} = hotel;
    const history = useHistory();
    const handleHotel = (data) => {
        setRooms(data);
        history.push('/details')
    }
    return (
        <div onClick={()=>handleHotel(hotel)} className="container hotel mt-2  border-bottom">
            <div className="row mb-2">
                <div className="col-md-6">
                {
                    hotel.image ? <img className="h-100 w-100" src={`data:image/jpeg;base64,${image.img}`} />  : ''
                }
                </div>
                <div className="col-md-6">
                    <h6>{title}</h6>
                    <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                    <p>Wifi Air conditioning Kitchen</p>
                    <p>Cancellation flexibility availiable</p>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex ">
                            <div><p className="text-success"><StarIcon/></p></div>
                            <div>
                                <p>{star}</p>
                            </div>
                        </div>
                        <div>
                            <p><span className="font-weight-bold">$ {cost}/</span>night</p>
                            <p>$ 167 total</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;