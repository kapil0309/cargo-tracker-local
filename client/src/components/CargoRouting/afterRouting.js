import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class afterRouting extends React.Component {

 /*   handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/routingLandingPage')
       
           } */


    render() {
    return (
        
        <div style= {
            {
                border: '20px solid black',
                backgroundColor: "#D3D3D3",
                textAlign: "center"
                }
             
             }>
            <p>You can proceed for CargoHandling </p>

            <Link to='/cargohandling'>
            <button class="routing-button" type="button"> Cargo Handling </button>
            </Link>

        </div>
    )
}
}

export default withRouter(afterRouting);