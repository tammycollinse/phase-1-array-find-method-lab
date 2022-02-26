// code your solution here
// the objective tonfind if the team had ever won a SuperBowl
//we have an array called record with objects with year:result key:value pairs


const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(recordArr){
 for (const item of recordArr){
     if (item.result === "W"){
      console.log(item.year);
      return item.year;
     }
 }
}

record.find(superbowlWin(record));