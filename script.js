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

// Array.prototype.some()
console.log("1. Some Check: Is at least one person 19?");

const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log({isAdult});

// Array.prototype.every()
console.log("2. Every Check: Is everyone 19?");

const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
console.log("3. Find the comment with the ID of 823423");

const comment = comments.find(comment => comment.id === 823423);

console.log(comment);

// Array.prototype.findIndex()
console.log("4. Find the comment with the ID of 823423");

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// comments.splice(index, 1);
console.log("5. Delete the comment with the ID of 823423");

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];