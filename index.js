// Constructor function for BoardMember
function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

// Adding methods to the BoardMember prototype
BoardMember.prototype.veto = function() {
  return "No, I must disagree";
};

BoardMember.prototype.approve = function() {
  return "You can do that!";
};

BoardMember.prototype.doCharity = function() {
  return "I like to help people.";
};

BoardMember.prototype.releasePressStatement = function() {
  return "You will see great things from Scuber.";
};

BoardMember.prototype.sayHi = function() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
};



const boardMember1 = new BoardMember('Alice', 'New York', 'Finance');
console.log(boardMember1.sayHi()); // Output: Hi, my name is Alice. I am from New York, and I was trained in Finance.
console.log(boardMember1.veto()); // Output: No, I must disagree
console.log(boardMember1.approve()); // Output: You can do that!