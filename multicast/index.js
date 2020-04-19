import Rx from 'rxjs';
/* Interview Question : 
   Your Observables logic should be run one time only , different subscriber should get same result
   Ans : Use publish() => it will share same result with different subscriber.
*/
const shared = new Rx.BehaviorSubject(-1);
const currencyTicker = Rx.Observable
    .interval(1000)
    .do(a=>console.log("PINGED API"))
    .map(n=>`Currency Info #${n} - [placeholder]`)
    // .share()  // When u r using share() , comment currencyTicker.connect(); line
    // .publish()
    .multicast(shared)

currencyTicker
    .subscribe(a=>console.log("LEFT WIDGET",a));

currencyTicker
    .subscribe(a=>console.log("RIGHT WIDGET",a));

currencyTicker.connect();