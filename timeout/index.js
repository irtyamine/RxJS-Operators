import Rx from 'rxjs';
import { fromStdIn } from '../utility'
/*
 Note: Interview question => Diff between timer() and timeout()
 1. timer() => Never throw error
 2. timeout() => It always throw error after timeout
*/

console.log("Please INPUT your password QUICKLY!!");

fromStdIn()
    .take(10)
    .timeout(2000)   // It throws error
    .subscribe(a=>console.log(a));