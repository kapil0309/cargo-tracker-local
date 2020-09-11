import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//import { fetchBookings } from 'E:/cargo-tracker-app/client/src/actions/formAction.js';


class CargoRouting extends React.Component {
   constructor(){
        super();
    this.state = {
        show: false,
        
     x : '' 
    } ; 

    


   }

   refreshButton =() => {
   // window.location.reload(false)

  // this.setState({show: localStorage.getItem('switch')})
    this.setState({show: !this.state.show})
   }

   

   
    render() {
    return (
        
        <div style= {
            {
                border: '20px solid black',
                backgroundColor: "#D3D3D3",
                textAlign: "center"
                }
             
             }>{
                this.state.show ?
                <h1> Your booking id is: {localStorage.getItem('bookingId')} </h1>
                 :null
                 
             
             }
  
               
                 
                 
                 
              
            

            <button type="button" class="routing-button" onClick={this.refreshButton}>Booking Id </button>

            <Link to='/routingLandingPage'>
            
            <button type="button" class="routing-button">Cargo Routing</button>
            </Link>

        </div>
    )
}
}
// onClick={() => window.location.reload(false)}
// {fetchBookings()}

export default withRouter(CargoRouting);
//{localStorage.getItem('bookingId')}
// getX = fetchBookings();
// {this.getX}

/* {
    this.state.show ?
    <h1>This is your id: {localStorage.getItem('x')} </h1>
     :null
     
 
 } */
