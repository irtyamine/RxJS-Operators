import Rx from 'rxjs';

/* from() method converts:
    Array => Observable
    Promise => Observable
*/  
const fibonacciArray = [1,1,2,3,5,8,13,21];
const fibonacciPromise = new Promise(r=>r(fibonacciArray));

function * fibonacciGenerator () {
    let a = 1, b = 1;
    while (true) {
        let c = a+b;
        yield c;
        a = b;
        b = c;
    }
};

Rx.Observable.from(
    // fibonacciArray
    // fibonacciPromise
       fibonacciGenerator()
)
    .take(10)                    // take() method is used to restrict emitting of element to a certain number
    .subscribe(a=>console.log(a));