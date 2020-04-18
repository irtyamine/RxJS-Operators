import Rx from 'rxjs';
/*
  Note:
  1. takeUntil(Rx.Observable.timer(2000)) operator accepts Observables argument in the form of time
  2. takeWhile() operator will keep showing data until condition gets false.
  3. take(count) operator will show limited data.
*/

Rx.Observable
    //.range(1,9)
    .interval(500)
    .takeUntil(Rx.Observable.timer(2000))
    // .takeWhile(n=> n < 7)
    // .take(5)
    .subscribe(e=>console.log(e));