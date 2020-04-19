import Rx from 'rxjs';
/*
 Note: Interview Question => Diff between concat and merge
 1. concat() => Until source Observable will not get finish , it wont execute provided Observable. It maintains sequence.
 2. merge() => It randomly execute any Observable . It does not maintain any sequence. 
*/
const bluePostFeed = Rx.Observable
    .interval(1000)
    .map(n=>`Blue Post Article #${n}`);

const redHeraldFeed = Rx.Observable
    .interval(650)
    .map(n=>`Red Herald Article #${n}`);

const greenTribuneFeed = Rx.Observable
    .interval(1650)
    .map(n=>`Green Tribune Article #${n}`);

const config = {
    blue:bluePostFeed,
    red:redHeraldFeed,
    green:greenTribuneFeed
};

const colors = ['blue','red','green'];

//******************************mergeMap() ************************************* 
Rx.Observable.from(colors)
    .mergeMap(color=>config[color])
    .subscribe(a=>console.log(a));

//******************************merge() *************************************    
// bluePostFeed
//     .merge(
//         redHeraldFeed
//     )
//     .subscribe(a=>console.log(a));

// *****************************mergeAll()************************************
// Rx.Observable.of(
//     bluePostFeed,
//     redHeraldFeed,
//     greenTribuneFeed
// ).mergeAll()
// .subscribe(a=>console.log(a));