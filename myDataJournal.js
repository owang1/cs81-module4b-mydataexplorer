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