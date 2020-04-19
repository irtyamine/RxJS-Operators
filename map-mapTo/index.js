import Rx from 'rxjs';
/* Note:
   1. map() method can be used to modify some data from emitted value and return that new value.
*/

const range = Rx.Observable.range(1,9);
range
    .map(n=>n * n)
    .subscribe(a=>console.log(a));

/* Note:
   1. mapTo() method can be used to show some fixed value over the period of time
   2. Notifcation or any message that should emit over period of time 
*/
const notificationAPI = Rx.Observable.interval(1000);
notificationAPI
    .mapTo({type:"NOTIFICATION_ARRIVED"})
    .subscribe(a=>console.log(a));