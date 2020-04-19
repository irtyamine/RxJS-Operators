import Rx from 'rxjs';
/*
  Note: 
  1. delay() operator delays for particular time
  2. delayWhen() operator delays for given time for each emit.
*/

console.log("STARTING!");

Rx.Observable.range(1, 9)
    // .delay(2000)
    .delayWhen(n=>Rx.Observable.timer(n * 1000))
    .subscribe(n=>console.log(n));


// Rx.Observable.of(42)
//     .do(()=>console.log("What is the meaning of life, the universe, and everything?"))
//     .delay(1200)
//     .do(()=>console.log("Come on! You know this one!!"))
//     .delay(2000)
//     .subscribe(v=>console.log(v));