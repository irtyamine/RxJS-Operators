import Rx from 'rxjs';
/******************************To run this file : webpack-dev-server***************************************
 1. go to browser => localhost:8080
 2. search for combineLatest
*/
const countryObservable = Rx.Observable.fromEvent(
    document.getElementById('country'),
    "change",
    e=>e.target.value
);

const cityObservable = Rx.Observable.fromEvent(
    document.getElementById("city"),
    "change",
    e=>e.target.value
);

// It always emits the latest combine value
Rx.Observable.combineLatest(
    countryObservable,
    cityObservable
)
.subscribe(a=>console.log(a));


// --------OutPut: It is an Array output--------------------
// ["India", "Mumbai"]
// ["India", "New Delhi"]
// ["Canada", "New Delhi"]