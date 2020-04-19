import Rx from 'rxjs';

/******************************To run this file : webpack-dev-server***************************************
*/
Rx.Observable.fromEvent(document.forms[0],'submit')
    .do(()=>console.log("Prevent refresh"))
    .subscribe(e=>e.preventDefault());

Rx.Observable.fromEvent(document.getElementById('animal'),'change')
    .map(event=>event.target.value)
    .subscribe(e=>console.log(e));

Rx.Observable.fromEvent(document.getElementById('motto'), 'change')
    .map(e=>e.target.value)
    .subscribe(e=>console.log(e));