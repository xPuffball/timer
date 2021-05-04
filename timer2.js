process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

let timer = function (msg, num) {
  for(let i = 0; i < num; i++) {
    setTimeout(() => console.log((i+1)+"..."), i * 1000)
  }
  setTimeout(() => console.log(msg), num*1000)
}

process.stdin.on('data', (key) => {
  if (key === 'b') {
    console.log("B E E P!")
  }
  if ("123456789".includes(key)) {
    console.log(`Starting timer for ${key} seconds...`)
    timer("BEEP!", key)
  }
  if (key === '\u0003') {
    console.log("Thanks for using me! Ciao!")
    process.exit();
  }
  console.log(key);
});
console.log('after callback');