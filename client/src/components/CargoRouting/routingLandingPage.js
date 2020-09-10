import React from 'react';
import {withRouter} from 'react-router-dom';
import './CargoRouting.scss';


class routingLandingPage extends React.Component {

    
handleClick(e) {
    e.preventDefault();
    alert("Routed Successfully ")
   
    console.log("handleClick(e) is evoked")
    this.props.history.push('/afterRouting')
   
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
             
             } >
            <h2>Cargo Routing</h2>
            <form onSubmit={this.handleClick.bind(this)}>
            <label class="required">Booking ID</label>
            <input type="text"
            required="required"
            onInput={this.toInputUpperCase} />

            <button type="submit" onClick={this.props.handleClick}>Submit</button>
            </form>

        </div>
    )
}
}

export default withRouter(routingLandingPage);