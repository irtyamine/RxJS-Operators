import Rx from 'rxjs'
/* Note: 
   1. distinctUntilChanged() operator , is very useful to fetch distinct values from the stream of emit of repeated values.
*/
Rx.Observable
    .interval(100)
    .map(n=>~~(n/10))
    .distinctUntilChanged()
    .subscribe(a=>console.log(a));