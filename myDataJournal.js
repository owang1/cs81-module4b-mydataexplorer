let weekData = [
  { day: "Monday", sleepHours: 9.5, screenTime: 6, mood: "normal", caffeineIntake: 1, focusLevel: 4},
  { day: "Tuesday", sleepHours: 8, screenTime: 4.5, mood: "high", caffeineIntake: 1, focusLevel: 4},
  { day: "Wednesday", sleepHours: 9, screenTime: 5, mood: "normal", caffeineIntake: 2, focusLevel: 7},
  { day: "Thursday", sleepHours: 9, screenTime: 2, mood: "normal", caffeineIntake: 3, focusLevel: 6},
  { day: "Friday", sleepHours: 9, screenTime: 2.5, mood: "high", caffeineIntake: 1, focusLevel: 2},
  { day: "Saturday", sleepHours: 9, screenTime: 1.5, mood: "low", caffeineIntake: 1, focusLevel: 5},
  { day: "Sunday", sleepHours: 9, screenTime: 4, mood: "normal", caffeineIntake: 1, focusLevel: 2}
];


// Predictions
// The day with the most screentime should be Monday
// The best focus day should be Wednesday
// I predict caffeine will help focusLevel a little

// Find the day with the highest screen time
function findHighestScreenTime(){
  let maxDay = null;
  let maxScreenTime = 0;

  for (let day of weekData) {
    if(day.screenTime > maxScreenTime){
      maxDay = day.day;
      maxScreenTime = day.screenTime;
    }
  }
  return maxDay;
}


// Find the average hours of sleep per day
function averageSleep(){
  let totalSleep = 0;
  let numberOfDays = 0;
  for (let day of weekData){
    totalSleep += day.sleepHours;
    numberOfDays++;
  }

  let averageSleepHours = totalSleep / numberOfDays;
  // Round to 2 decimal places
  averageSleepHours = Math.round(averageSleepHours * 100) / 100;
  return averageSleepHours;
}


function mostFrequentMood(){
  const moodCounts = {};
  // Iterate through entries of log
  for (let day of weekData) {
    if (!moodCounts[day.mood]) {
      moodCounts[day.mood] = 1;
    } else {
      moodCounts[day.mood]++;
    }
  }

  let maxMood = null;
  let mostFrequentCount = 0;
  for (let mood in moodCounts) {
    if(moodCounts[mood] > mostFrequentCount) {
      maxMood = mood;
      mostFrequentCount = moodCounts[mood];
    }
  }
  return maxMood;
}


function getCaffeineArray(){
  let caffeineArray = []
  for (let day of weekData){
    caffeineArray.push(day.caffeineIntake);
  }
  return caffeineArray;
}

function getFocusArray(){
  let focusArray = []
  for (let day of weekData){
    focusArray.push(day.focusLevel);
  }
  return focusArray;
}

function getAverage(array){
  let sum = 0;
  const n = array.length;
  for (let num of array){
    sum += num;
  }
  const average = sum / n;
  return average; 

}

function pearsonCorrelation() {
    x = getCaffeineArray();
    y = getFocusArray();
    n = x.length;

    const meanX = getAverage(x);
    const meanY = getAverage(y);

    let numerator = 0;
    let sumSqX = 0;
    let sumSqY = 0;

    for (let i = 0; i < n; i++) {
        const dx = x[i] - meanX;
        const dy = y[i] - meanY;
        numerator += dx * dy;
        sumSqX += dx * dx;
        sumSqY += dy * dy;
    }

    const denominator = Math.sqrt(sumSqX * sumSqY);

    return numerator / denominator;
}

function isThereCorrelation(correlation){
  if(correlation >= .7){
    return "Yes, very much!";
  }else if(correlation >= 0 && correlation < .7){
    return "Yes, somewhat";
  }
  else{
    return "Nope!";
  }
}


console.log("Analyzing Olivia's Data Journal...\n");
maxScreenDay = findHighestScreenTime();
console.log("Most screen time:", maxScreenDay);
averageSleepHours = averageSleep();
console.log("Average sleep: ", averageSleepHours, "hrs");
maxMood = mostFrequentMood();
console.log("Most frequent mood:", maxMood);

correlation = pearsonCorrelation();
message = isThereCorrelation(correlation);
console.log("Does more caffeine mean better focus? ->", message)