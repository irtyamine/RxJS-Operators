import Rx from 'rxjs';
/*
 Note:
 1. retry(3) => no of attempts to call same API
 2. .retryWhen(()=>Rx.Observable.interval(1000)) => It will keep calling API after 1 sec
     Drawback: It wont stop anytime even though API is throwing error
*/
const buggyAPI = Rx.Observable
    .timer(1000)
    .do(a=>console.log("You called the buggy API!"))
    .do(a=>{throw new Error()});

buggyAPI
    // .retry(3)
    .retryWhen(()=>Rx.Observable.interval(1000))
    .subscribe(a=>console.log(a))