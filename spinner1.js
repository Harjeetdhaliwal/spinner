setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 400);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1000);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1800);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 2100);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 2400);

setTimeout(() => {
  process.stdout.write('\n');
}, 2600);
