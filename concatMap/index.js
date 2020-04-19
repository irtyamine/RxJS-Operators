import Rx from 'rxjs';
/*
  Note: concatMap() operator has different behaviour than regular concat() and concatAll().
*/
Rx.Observable
    .interval(300)
    .take(5)
    .do(n => console.log(`before concatMap()==${n}`))
    .concatMapTo(Rx.Observable.range(0,5))
    // .concatMap(n=>Rx.Observable.range(0,n+1))
    .do(n => console.log(`----------after concatMap()==${n}`))
    .subscribe(a=>console.log('-----Final Result ',a));