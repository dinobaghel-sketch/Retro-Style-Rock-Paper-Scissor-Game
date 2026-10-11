// now we're saving the data in teh local storage of the browser

// load saved data from localStorage using JSON.parse, or use defaults

let savedStats=JSON.parse(localStorage.getItem("rps_game_stat")) || {
  countUserScore:"0",
  countCompScore:"0",
  tieCount:"0",
  winUserCount:"0",
  lossUserCount:"0",
  winCompCount:"0",
  lossCompCount:"0",
};

//Assigning loaded values to variables

let countUserScore=savedStats.countUserScore;
let countCompScore = savedStats.countCompScore;
let tieCount = savedStats.tieCount;
let winUserCount = savedStats.winUserCount;
let lossUserCount = savedStats.lossUserCount;
let winCompCount = savedStats.winCompCount;
let lossCompCount = savedStats.lossCompCount; 


// helper fuction to save current sats into localStorage using JSON.stringify

let saveStats=()=>{
  let statsObj={
    countUserScore,
    countCompScore,
    tieCount,
    winUserCount,
    lossUserCount,
    winCompCount,
    lossCompCount
  };
  localStorage.setItem("rps_game_stats",JSON.stringify(statsObj));
};


