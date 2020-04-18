import Rx from 'rxjs';
import { fromStdIn } from '../utility';
/*
  Note: concatAll()

*/

Rx.Observable.of(
    Rx.Observable.range(1,3),              // First Observable will get executed then
    Rx.Observable.interval(100).take(10),  // Second Observable will get executed then
    fromStdIn()                            // Third Observable
)
//   concatAll()  operator sequentially run one by one Observable , even though u try to execute 
//   third Observable from starting , it won't work.
    .concatAll()                          
    .subscribe(a=>console.log(a));