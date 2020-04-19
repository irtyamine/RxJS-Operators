import { fromStdIn } from '../utility'
import Rx from 'rxjs';

fromStdIn()
    .throttle(
        ()=>fromStdIn().filter(key=>key==="p")
    )
    // .throttleTime(1000)
    .subscribe(a=>console.log(a));



Rx.Observable
      .interval(100)       
      .throttleTime(1000)  // It will emit value after 1 sec only even though interval(100) will emit after 100 ms  
      .subscribe(a=>console.log(a));