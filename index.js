const {
  // fetchMyIP,
  // fetchCoordsByIP,
  // fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
} = require('./iss');

// fetchMyIP((err, description) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(description);
//     return description;
//   }
// });


// fetchCoordsByIP('66.207.199.230',(err, description) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(description);
//   }
// });


// fetchISSFlyOverTimes({
//   latitude: 43.63830,
//   longitude: -79.43010
// }, (err, description) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(description);
//   }
// });


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
  return passTimes;
});
