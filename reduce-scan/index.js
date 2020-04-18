import Rx from 'rxjs';
/*
  Note: Interview Question
  How will u add a given array number using RxJS operator => use reduce() or scan()
*/
Rx.Observable
    .interval(200)
    .take(10)
    // .reduce((acc,value)=>acc+value,0) // It will return and show total value
    .scan((acc,value)=>acc+value,0)      // It will keep showing one by one added value output till total value
    .subscribe(a=>console.log(a));