import Rx from 'rxjs';
/* Note:
   1. last()               => It will give last element.
   2. last(n=> n % 2 == 0) => Whoever is the last element who will satisfy this condition.  
*/

Rx.Observable
    // .range(1,9)
    .interval(100)
    .take(10)
    .last(n=> n % 2 == 0)        
    .subscribe(a=>console.log(a));