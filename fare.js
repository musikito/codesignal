
function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile)
 {
    //let fare = (cost_per_minute*ride_time) + (cost_per_mile*ride_distance);

    var myArray = [];
    // iterate thru the cost per mile and cost per minute
    for (var i = 0; i < cost_per_mile.length; i++) 
    {
        // temp to hold the calculation
      var calc = (cost_per_minute[i] * ride_time) + (cost_per_mile[i] * ride_distance);
      myArray.push(calc);
    }
    return myArray;
}

//console.log(fareEstimator(30,7,0.2,1.1));
console.log(fareEstimator(30,7,[0.2, 0.35, 0.4, 0.45],[1.1, 1.8, 2.3, 3.5]));
