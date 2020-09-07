import React, { Component } from 'react';
import './CargoBooking.scss';




class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
            bookingAmount: "",
            originLocation: "",
            destLocation: "",
            destArrivalDeadline: ""
          
      };
      }

    
    handleSubmit(e, res) {
       
        e.preventDefault();
        this.props.onSubmit(this.state);
        console.log("handleSubmit(e) is evoked")
        
    }

      

    

     render() {
        return (

            <div style= {
                {
                    border: '40px solid black',
                    backgroundColor: "#D3D3D3"
                    }
                 
                 }>
            <h2>Cargo Tracking Booking</h2>
            
                <form onSubmit={this.handleSubmit.bind(this)}>

                
                   
                       
                            <label>Booking Amount</label>
                            
                                <input type="number"
                                       
                                       value={this.state.bookingAmount}
                                       onChange={(data )=>{this.setState({bookingAmount:data.target.value})}}
                                        required="required" /> <br />
                          
                       
                            <label>Origin Location</label>
                           
                                <input type="text"
                                       
                                       value={this.state.originLocation}
                                       onChange={(data )=>{this.setState({originLocation:data.target.value})}}
                                       required="required" /> <br />
                         
                            <label>Destination Location</label>
                            
                                <input type="text"
                                       
                                       value={this.state.destLocation}
                                       onChange={(data )=>{this.setState({destLocation:data.target.value})}}
                                       
                                       required="required" /> <br />
                            
                            <label>Destinaton Arrival DeadLine (Date)</label>
                           
                                <input type="date"
                                       
                                       value={this.state.destArrivalDeadline}
                                       onChange={(data )=>{this.setState({destArrivalDeadline:data.target.value})}}
                                        pattern="yyyy-mm-dd"
                                        required="required" /> <br />
                          
                           <button onClick={this.props.onSubmit} type="submit">
                                    Submit
                                </button>
                           
                </form>
                </div>
            
        );
}
};

export default Form;