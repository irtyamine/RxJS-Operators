import Rx from 'rxjs'
/* Note:
   1. From Object, if you want to get specific value then pass its key to pluck() operator.

*/
const friendsAPI = Rx.Observable
    .interval(300)
    .map(i=>({name:`Friend #${i}`, mutualFriends: i * 2 + 1}))
    .pluck("name")
    .subscribe(a=>console.log(a));