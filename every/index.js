import Rx from 'rxjs';
/* Note:
   1. every() operator always emits its value in last
   2. If every() operator boolean condition gets false , it stop immediately.
   3. But if condition remains true then it will emit value at the end.
*/
const range = Rx
    .Observable
    .interval(100)
    .take(100)

range
    .map(n=>n*2)
    .do(v=>console.log("Value::",v))
    .take(10)
    .every(n=>n % 2 == 0)
    .subscribe(b=>console.log(b));