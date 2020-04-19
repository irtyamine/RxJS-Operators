import Rx from 'rxjs';
/*
  Note: To run this file use:
  1. cmd.exe
  2. VSCode terminal
****************************It will not work in git bash******************
*/
export const fromStdIn = ()=>{
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf-8');

    const observable = Rx.Observable.fromEvent(stdin,'data');
    observable.subscribe(key=>{
        if (key === '\u0003') {
            process.exit();
        }
    })
    return observable;
};

//fromStdIn().subscribe(a=>console.log(a));