const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ']
let time = 100;

for( let i = 0; i < array.length; i++){
  setTimeout(() => {
    process.stdout.write(array[i]);
    if(i === array.length - 1){
      process.stdout.write(array[0]);
      console.log();
    }
  }, time);
  time+= 300;
}
  
