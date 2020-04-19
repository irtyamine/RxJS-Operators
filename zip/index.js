import Rx from 'rxjs';
/*  ****************************zip => Make an Array(Observable)*****************************
*/
const slowNumberObservable = Rx.Observable.interval(100);
const slowSquareObservable = Rx.Observable.interval(1000).map(n=>n*n);

Rx.Observable.zip(
    slowNumberObservable,
    slowSquareObservable
)
    .subscribe(a=>console.log(a));
// slowNumberObservable.subscribe(a=>console.log(a));
// slowSquareObservable.subscribe(a=>console.log(a));

//Output:
// E:\00_STS-4.4-Workspace\RxJs-Operators>babel-node zip
// [ 0, 0 ]
// [ 1, 1 ]
// [ 2, 4 ]
// [ 3, 9 ]
// [ 4, 16 ]
// [ 5, 25 ]
// [ 6, 36 ]
// [ 7, 49 ]
// [ 8, 64 ]
// [ 9, 81 ]
// [ 10, 100 ]