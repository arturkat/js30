document.addEventListener('DOMContentLoaded', fnReady, false);
function fnReady() {
    // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];


    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const isOne19Year = people.some((person, index, array) => {
        const age = new Date().getFullYear() - person.year;
        return age >= 19;
    });
    console.log("is at least one person 19 or older?");
    console.log({isOne19Year});


    // Array.prototype.every() // is everyone 19 or older?
    const isEvery19Year = people.every((person, index, array) => {
        var age = new Date().getFullYear() - person.year;
        return age >= 19;
    });
    console.log("is everyone 19 or older?");
    console.log({isEvery19Year});


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    let specialComment = comments.find((comment) => {
        return comment.id === 823423 ? true : false;
    });
    console.log("find the comment with the ID of 823423");
    console.log(specialComment.text);


    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    let specialCommentIndex = comments.findIndex((comment) => {
        return comment.id === 823423 ? true : false;
    });
    console.log("Find the comment with this ID - 823423");
    console.log(specialCommentIndex);
    // delete the comment with the ID of 823423
    console.table(comments);
    comments.splice(specialCommentIndex, 1);
    console.table(comments);
}