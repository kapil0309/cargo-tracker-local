import React from 'react';
import {withRouter} from 'react-router-dom';
import './CargoHandling.scss'; 
import axios from "axios";


class CargoHandling extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
            bookingId: "", 
            unLocode: "", 
            handlingType: "", 
            completionTime: "", 
            voyageNumber: "" 
          
      };
      }

      initialState = {
        bookingId: "", 
            unLocode: "", 
            handlingType: "", 
            completionTime: "", 
            voyageNumber: "" 
      } 

      handleFormReset1 =() => {
        this.setState(() => this.initialState)
    }

fetchHandling(data) {

    console.log('https://cargo-handling-liberty-api-bluecargo-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/cargohandling', data );
   
  
    axios
    .post("/cargohandling", data)
    .then(res => 
    console.log(res))
    .catch(err => console.log(err));

  
  }


    handleSubmit2(e) {
        e.preventDefault();
        this.fetchHandling(this.state)
        alert("Handling is done successfully")
        console.log("handling is done successfully", this.state)
         }

           toInputUpperCase(e) {
            e.target.value = ("" + e.target.value).toUpperCase();
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

                <form onSubmit={this.handleSubmit2.bind(this)}
                onReset = {this.handleFormReset1.bind(this)} >

                <h2>CargoTracker Handling</h2>

                <label class="required">Booking Id</label>
                <input type="text"
                                       
                                       value={this.state.bookingId}
                                       onInput={this.toInputUpperCase}
                                       onChange={(data )=>{this.setState({bookingId:data.target.value})}}
                                       required="required" /> <br />
                

                <label class="required">Location Code</label>
                <input type="text"
                                       
                                       value={this.state.unLocode}
                                       onInput={this.toInputUpperCase}
                                       onChange={(data )=>{this.setState({unLocode:data.target.value})}}
                                       required="required" /> <br />
               

                <label class="required">Handling Type</label>
                <input type="text"
                                       
                                       value={this.state.handlingType}
                                       onInput={this.toInputUpperCase}
                                       onChange={(data )=>{this.setState({handlingType:data.target.value})}}
                                        required="required" /> <br />
                

               

                <label>Voyage Number</label>
                <input type="text"
                                       
                                       value={this.state.voyageNumber}
                                       onInput={this.toInputUpperCase}
                                       onChange={(data )=>{this.setState({voyageNumber:data.target.value})}}
                                         /> <br />

<label class="required">Completion Time(Date)</label>
                <input type="date"
                                       
                                       value={this.state.completionTime}
                                       onChange={(data )=>{this.setState({completionTime:data.target.value})}}
                                       pattern="yyyy-mm-dd"
                                       required="required" /> <br />
                
                

                <button onClick={this.props.onSubmit2} type="submit">Submit</button>
                <button onClick={this.handleFormReset1} type="reset" >Clear</button>
                
                </form>
            </div>
        )
}
}
export default withRouter(CargoHandling);

