import Rx from 'rxjs';
/* Note:
   1. empty() method never emits anything
*/
Rx.Observable
    .empty()
    .subscribe({
        next:a=>console.log("next() ==",a),
        complete:a=>console.log("complete() ==",a)
    });