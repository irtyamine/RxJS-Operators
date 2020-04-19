import Rx from 'rxjs';
import { fromStdIn } from '../utility'
/*
  Note:
  1. Whatever key u have pressed last time it retain and shows with time
*/
Rx.Observable
    .interval(1000)
    .withLatestFrom( fromStdIn() )
    .subscribe(a=>console.log(a));