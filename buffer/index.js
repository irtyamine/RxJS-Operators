import { fromStdIn } from '../utility'
import Rx from 'rxjs';
/*  ****************************buffer => Make an Array(Observable)*****************************

*/
console.log('Start Typing !!!');
fromStdIn()
// Approach 1: buffer() => type your name and then press key P , RESULT: You will get an Array
    // .buffer(
    //     fromStdIn().filter(key=>key==='p')
    // )

// Approach 2: bufferCount(5) => Once total 5 elements typed then it will give u n array of 5 elements
    // .bufferCount(5)

// Approach 3: bufferTime(1000) => In 1 sec , number of elements typed will be shown as an array 
    // .bufferTime(1000)

// Approach 4: bufferToggle(1000) => Pree key P first and then type elements and once done press key O, see u an array
    // .bufferToggle(
    //     fromStdIn().filter(key=>key==='p'),
    //     ()=>fromStdIn().filter(key=>key==='o')
    // )

// Approach 5: bufferWhen(1000) => Number of elements typed in 1 sec that will be shown as an array
    .bufferWhen(
        ()=>Rx.Observable.timer(1000)
    )
    .subscribe(e=>console.log(e));

//*********************************************More Practice***************************************************** */
    // Example of buffer()
    // Rx.Observable.interval(100)
    //   .buffer(
    //     Rx.Observable.interval(300).filter(n => n % 5 ==0 )
    //    )
    //    .subscribe(e=>console.log(e));

    // Example of bufferCount()  
    // Rx.Observable.interval(100)   
    // .bufferCount(5)
    // .subscribe(e=>console.log(e));