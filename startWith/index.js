import Rx from 'rxjs';
/* Note:
   1. startWith() operator is used to get desired value first right away then it continues with the normal emitting values.
*/
console.info("MADE API REQUEST");
Rx.Observable
    .timer(2000,400)
    .map(n=>n+1)
    .startWith(10)
    .subscribe(a=>console.log("REQUEST COMPLETE:", a));