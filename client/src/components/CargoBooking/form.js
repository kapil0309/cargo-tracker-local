import React from 'react';
import { withRouter } from 'react-router-dom';

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
        this.props.onSubmit(this.state);
        alert("booking is done successfully");
        this.props.history.push('/cargorouting');
        console.log("handleSubmit(e) is evoked")
    }

    toInputUpperCase(e) {
        e.target.value = ("" + e.target.value).toUpperCase();
    }

    handleFormReset = () => {
        this.setState(() => this.initialState)
    }



    render() {
        return (

            <div style={
                {
                    border: '20px solid black',
                    backgroundColor: "#D3D3D3",
                    textAlign: "center"
                }

            }>
                <h2>Cargo Tracking Booking</h2>

                <form onSubmit={this.handleSubmit.bind(this)}
                    onReset={this.handleFormReset.bind(this)}
                >

                    <label class="required0" >Booking Amount</label>

                    <input type="number" class="required3"

                        value={this.state.bookingAmount}
                        onChange={(data) => { this.setState({ bookingAmount: data.target.value }) }}
                        required="required" /> <br />


                    <label class="required1">Origin Location</label>

                    <input class="required2" type="text"

                        value={this.state.originLocation}
                        onInput={this.toInputUpperCase}
                        onChange={(data) => { this.setState({ originLocation: data.target.value }) }}
                        required="required" /> <br />

                    <label class="required1">Destination Location</label>

                    <input class="required2" type="text"

                        value={this.state.destLocation}
                        onInput={this.toInputUpperCase}
                        onChange={(data) => { this.setState({ destLocation: data.target.value }) }}

                        required="required" /> <br />

                    <label class="required1">Destinaton Arrival DeadLine (Date)</label>

                    <input class="required2" type="date"

                        value={this.state.destArrivalDeadline}
                        onChange={(data) => { this.setState({ destArrivalDeadline: data.target.value }) }}
                        pattern="yyyy-mm-dd"
                        required="required" /> <br />

                    <button onClick={this.props.onSubmit} type="submit">
                        Submit
                                </button>
                    <button type="reset" onClick={this.handleFormReset}>Clear</button>


                </form>
            </div>

        );
    }
};

export default withRouter(Form);