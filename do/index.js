import Rx from 'rxjs';
/* Note:
   1. do() operator is only used to console.log().
*/

const interval = Rx.Observable.interval(300);

interval
    .filter(n => n % 5 == 0)
    .map(n=>n*n)
    .do(n=>console.log("N after Map#1::",n))
    .map(n=>n / 5)
    .do(n=>console.log("N after Map#2::",n))
    .map(n=>n * n * n)
    .do(n=>console.log("N after Map#3::",n))
    .map(n=>n + n)
    .do(n=>console.log("N after Map#4::",n))
    .subscribe(a=>console.log(a));