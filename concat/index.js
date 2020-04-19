import Rx from 'rxjs';

//Note: Until first  Observable will not get finish , second Observable will not get call

// Source Observable
Rx.Observable
    // .range(1,10)
    .interval(100)
    .take(20)
    .concat(                
        Rx.Observable  // provided Observable
          //  .range(1,20)
            .interval(100)
            .map(n=>"#2"+n)
            .skip(10)
    )
    .subscribe(a=>console.log(a));