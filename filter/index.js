import Rx from 'rxjs';
/* Note: 4 Way to give example of filter
   1. interval(duration) == it will same as array[1,2,3,4,5,6,7,8,9,10]
   2. timer(duration , interval) 
   3. We can use Array and then use from() operator to use filter
   4. range(start , end) operator can be used also
   

     ********kindly comment any one Approach to see output***********************
 */ 

// Approach 1 Using interval()
const interval = Rx.Observable.interval(200);
 
interval
    .filter(n=>n % 10 == 0)
    .take(10)
    .subscribe(a=>console.log('Divisible by 10 ==', a));
// ----------------------------------------------------------------------------------
// Approach 2 Using timer()
const timer = Rx.Observable.timer(200,100);
 
timer
    .filter(n=>n % 5 == 0)
    .take(10)
    .subscribe(a=>console.log('Divisible by 5 ==',a));

// ----------------------------------------------------------------------------------
 // Approach 3 : Convert Array into Observable  
const array = [1,2,3,4,5,6,7,8,9,10];
const arrayObservables = Rx.Observable.from(array);

arrayObservables
     .filter(n=>n % 2 == 0)
     .subscribe(a=>console.log('Divisible by 2 ==',a));

// ----------------------------------------------------------------------------------
 // Approach 4 : Using range() operator
 const rangeObservable = Rx.Observable.range(0,16);

 rangeObservable
    .subscribe(e=>console.log(`Range emitted ${e}`));   