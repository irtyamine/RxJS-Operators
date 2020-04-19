import Rx from 'rxjs';
/*
 Note: Whoever API will emit fast those API result will be shown , other API will be rejected.
*/
const apiA =Rx.Observable
    .timer(1500,100)
    .map(n=>`API A => ${n}`);

const apiB = Rx.Observable
    .timer(2000,100)
    .map(n=>`API B => ${n}`);

Rx.Observable.race(
    apiA,
    apiB
)
.subscribe(a=>console.log(a));