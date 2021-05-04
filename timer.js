let alarmTimes = process.argv;
alarmTimes = alarmTimes.slice(2).filter((x) => typeof Number(x) === 'number')

const typewriter = function(str) {
  for(let i = 0; i < str.length; i++) {
    setTimeout(() => i === str.length -1 ? process.stdout.write(str[i] + '\n') : process.stdout.write(str[i]), i*25)
  }
}

for(let i = 0; i < alarmTimes.length; i++) {
  if (alarmTimes[i] > 0) {
    setTimeout(() => typewriter(`B E E P! This is your ${alarmTimes[i]} second alarm.`), alarmTimes[i]*1000)
  }
}