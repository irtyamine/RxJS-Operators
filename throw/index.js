import Rx from 'rxjs';

   Rx.Observable
    .throw()
    .subscribe({
        next: n => console.log("N value was emitted", n),
        error: e => console.log("Entered error state!", e)
    });

    Rx.Observable
    .throw()
    .subscribe(
        (n) => console.log("N value was emitted", n),
        (e) => console.log("Entered error state!", e)
    );