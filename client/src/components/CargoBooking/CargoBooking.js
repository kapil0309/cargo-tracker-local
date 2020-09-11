import React, { Component } from 'react';
import Form from 'E:/cargo-tracker-app/client/src/components/CargoBooking/form.js';
import { fetchBookings } from 'E:/cargo-tracker-app/client/src/actions/formAction.js';
import 'E:/cargo-tracker-app/client/src/components/CargoBooking/form.js';



export default class Create extends Component {



    handleSubmit(data) {
        console.log('form data', data);
        fetchBookings(data);
        
        //console.log("Form is submitted")



    }

    render() {
        return (
            <div
            >
                <Form onSubmit={this.handleSubmit}></Form>

            </div>
        )
    }

}

