const timer = process.argv.slice(2);
let time = 0;
for (let number of timer) {
  if (timer > 0 && number !== false) {
    setTimeout(() => {
      console.log('Time is up!');
      process.stdout.write('\x07');
    }, number * 1000)
  }
}
