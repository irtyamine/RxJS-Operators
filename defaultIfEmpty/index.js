import Rx from 'rxjs';
/* Note: 
   1. defaultIfEmpty(42) operator is used , when nothing value gets emit from API 
      but u have to complete this subscribe function explicitly in that case u will use.
*/
Rx.Observable
    .empty()
    .defaultIfEmpty(42)
    .subscribe(a=>console.log("Where's the value???",a));