import Rx from 'rxjs';

const friendAPI = Rx.Observable
    .timer(1000)
    .mapTo({name:"Hank"});

const preferencesAPI = Rx.Observable
    .timer(1700)
    .mapTo(Rx.Observable.throw())
    .concatAll()
    // .mapTo({theme:"dark"});

// Note: Any one API throws an error ,forkJoin will get stop. 
Rx.Observable.forkJoin(
    friendAPI,
    preferencesAPI
)
.subscribe(r=>console.log(r));