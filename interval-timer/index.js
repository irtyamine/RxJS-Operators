import Rx from 'rxjs';
/*
 interval(duration)
 1. duration = After that time it will start emitting and it will keep the interval time same as duration.
 2. i.e duration == interval

***********************************************************************************************************
 A) timer(duration, interval)
    1. duration = After that time it will start emitting.
    2. interval = interval time between to consecutive emit , once started.

    Note : 
    1. timer() method will keep on emitting value until u break using ctrl+c.
    2. In order to stop emitting use take(count).

 B) timer(duration) : It will emit one value only after duration time.

*/
const stopWatch = Rx.Observable.timer(3000,1000);

stopWatch
.take(5)  // optional method to restrict emitting
.subscribe(a=>console.log("A", a));