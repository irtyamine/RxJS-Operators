import Rx from 'rxjs';
/*  Note: 
    1. Without Argument:
       - If u will use first() operator , default u will get the first value.
    2. With Arguement:
       - If u will use first(n => n == 10) operator , then once this condition will get true that value gets emit.
*/
Rx.Observable.interval(100)
    // .first()?
    .first(n => n == 10)
    .subscribe(a=>console.log(a));