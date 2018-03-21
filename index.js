function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let difference = blockRange - (Math.abs((parseInt(startBlock)) - parseInt(endBlock)));
    if (difference > 0){
      return `within range by ${difference}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage){
  return function (total){
    return total * percentage;
  }
}

function createDriver(){
  let driverId = 0

  return class {
    constructor(name){
      this.name = name
      this.id = ++ driverId
    }
  }
}
