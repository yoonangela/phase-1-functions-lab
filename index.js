// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42){
        let dist = someValue-42
        return dist;
    } else {
        let dist = 42-someValue
        return dist;
    }
  }

function distanceFromHqInFeet(someValue) {
    let distance = distanceFromHqInBlocks(someValue);
    let inFeet = distance * 264;
    return inFeet
}

function distanceTravelledInFeet(start, destination) {
    if (start>=destination){
        let dis = start-destination;
        return dis*264;
    } else{
        let dis = destination - start;
        return dis*264;
    }
  }

  function calculatesFarePrice(start, destination) {
    let distanceFromstod = distanceTravelledInFeet(start, destination);
        if (distanceFromstod<=400){
            return 0;
        } else if(2000>=distanceFromstod && distanceFromstod>400){
            let price = (distanceFromstod-400) * 2 * 0.01;
            return price;
                } else if(2500>=distanceFromstod && distanceFromstod>2000){
                 return 25;
                     } else {
                        return 'cannot travel that far';
                        }
                
        }
  
