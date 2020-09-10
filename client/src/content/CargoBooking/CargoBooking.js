import React, { Component } from 'react';
import Form from 'E:/cargo-tracker-app/client/src/components/CargoBooking/form.js';
import { fetchBookings } from 'E:/cargo-tracker-app/client/src/actions/formAction.js';
import 'E:/cargo-tracker-app/client/src/components/CargoBooking/form.scss'


export default class Create extends Component {

            handleSubmit(data) {
            console.log('form data', data);
            fetchBookings(data);
    
    } 

    render(){
        return(
            <div style= {
                {
                    border: '30px solid black',
                    backgroundColor: "#D3D3D3",
                    textAlign: "center"
                    }
                 
                 } >
                <Form onSubmit={this.handleSubmit}></Form>
            </div>
        )
    }
    
}

