import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class CargoRouting extends React.Component {
    
    render() {
    return (
        
        <div style= {
            {
                border: '20px solid black',
                backgroundColor: "#D3D3D3",
                textAlign: "center"
                }
             
             }>
            <p>You can proceed for CargoRouting. Your booking id is:{localStorage.getItem('bookingId')} </p>

            <Link to='/routingLandingPage'>
            <button type="button" class="routing-button"> Cargo Routing </button>
            </Link>

        </div>
    )
}
}

export default withRouter(CargoRouting);
//{localStorage.getItem('bookingId')}