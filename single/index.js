import Rx from 'rxjs';
/* 
   Note: Interview Question => Diff between first() and single()
   first() => Please refer its code , it does not throw error
   single() => If there is more than one element it throws error
*/
Rx.Observable
    .range(0,3)
    .single(n=>n % 2 == 0)
    .subscribe(a=>console.log(a));