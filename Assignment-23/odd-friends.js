function oddFriend(friends){
for(let friend of friends){
    if(friend.length % 2 != 0){
        return friend;
    }
                                // var chack = friend.length;
                                // // return chack;
                                // console.log(chack);
}
}
var myFriends = [ 'alim', 'daiml'];
const findOddFriend = oddFriend(myFriends);
console.log(findOddFriend);