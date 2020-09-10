import React from 'react';
import {withRouter} from 'react-router-dom';
import './form.scss'

//import CargoRouting from 'E:/cargo-tracker-app/client/src/components/CargoRouting/CargoRouting.js';



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
    initialState = {
        bookingAmount: "",
        originLocation: "",
        destLocation: "",
        destArrivalDeadline: ""
      } 

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.onSubmit(this.state);
        alert("booking is done successfully");
        console.log("handleSubmit(e) is evoked")
        this.props.history.push('/cargorouting')
       
       
           }

           toInputUpperCase(e) {
               e.target.value = ("" + e.target.value).toUpperCase();
           }

         handleFormReset =() => {
             this.setState(() => this.initialState)
         }

           

render() {
        return (

            <div style= {
                {
                    border: '20px solid black',
                    backgroundColor: "#D3D3D3",
                    textAlign: "center"
                    }
                 
                 }>
            <h2>Cargo Tracking Booking</h2>
            
                <form onSubmit={this.handleSubmit.bind(this)}
                    onReset = {this.handleFormReset.bind(this)}
                        >
 
                            <label class="required" >Booking Amount</label>
                            
                                <input type="number"
                                       
                                       value={this.state.bookingAmount}
                                       onChange={(data )=>{this.setState({bookingAmount:data.target.value})}}
                                        required="required" /> <br />
                          
                       
                            <label class="required">Origin Location</label>
                           
                                <input class="x" type="text"
                                       
                                       value={this.state.originLocation}
                                       onInput={this.toInputUpperCase}
                                       onChange={(data )=>{this.setState({originLocation:data.target.value})}}
                                       required="required" /> <br />
                         
                            <label class="required">Destination Location</label>
                            
                                <input type="text"
                                       
                                       value={this.state.destLocation}
                                       onInput={this.toInputUpperCase}
                                       onChange={(data )=>{this.setState({destLocation:data.target.value})}}
                                       
                                       required="required" /> <br />
                            
                            <label class="required">Destinaton Arrival DeadLine (Date)</label>
                           
                                <input type="date"
                                       
                                        value={this.state.destArrivalDeadline}
                                        onChange={(data )=>{this.setState({destArrivalDeadline:data.target.value})}}
                                        pattern="yyyy-mm-dd"
                                        required="required" /> <br />
                          
                           <button onClick={this.props.onSubmit} type="submit">
                                    Submit
                                </button>
                                <input type="reset" name="Clear" value="Reset" onClick={this.handleFormReset} />
                               
                           
                </form>
                </div>
            
        );
}
};

export default withRouter(Form);