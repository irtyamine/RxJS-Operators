import Rx from 'rxjs';
import { fromStdIn } from '../utility'
/*
  Note:
  1. skip(5) operator                     =>It will skip first 5 elements , thereafter it will start typing
  2. skipWhile(v=>v !== "g") operator     =>It wont type anything until u type letter g , thereafter it will start typing
  3. skipUntil(Rx.Observable.timer(4000)) =>It will start typing after 4 seconds

***************It will work in CMD or VSCode terminal***********************************
*/

console.log("Start typing now !!!!");
fromStdIn()
    // .skip(5)
    // .skipWhile(v=>v !== "g")
    .skipUntil(Rx.Observable.timer(4000))
    .subscribe(k=>console.log(k));
