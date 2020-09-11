
import axios from "axios";

export function fetchBookings(data) {

  console.log('https://cargo-booking-liberty-api-bluecargo-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/cargobooking', data);


  axios
    .post("/cargobooking", data)
    .then(res => {
      console.log(res)
      localStorage.setItem('bookingId', res.data.bookingId)
    }

    )
    .catch(err => console.log(err));

}
