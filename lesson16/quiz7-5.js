/* Directions:
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1 */

var facebookProfile = {
    name: "Melissa",
    friends: 20,
    messages: ["What a lovely day!", "Working on the dev life", "Chocolate cake for days :-)"],
    
    postMessage: function addMessage(message) {
        facebookProfile["messages"].push(message);
        return facebookProfile["messages"];
    },
    deleteMessage: function removeMessage(index) {
        facebookProfile["messages"].splice(index -1,1);
        return facebookProfile["messages"];
    },
    addFriend: function addOneFriend() {
        facebookProfile["friends"]++;
    },
    removeFriend: function removeOneFriend() {
        facebookProfile["friends"]--;
    },
};

facebookProfile.deleteMessage(1,1);
console.log(facebookProfile.messages);
