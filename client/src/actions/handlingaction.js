import axios from "axios";
 

export function fetchHandling(data) {

  console.log('https://cargo-handling-liberty-api-bluecargo-dev.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/cargohandling', data );
 

  axios
  .post("/cargohandling", data)
  .then(res => 
  console.log(res))
  .catch(err => console.log(err));

}