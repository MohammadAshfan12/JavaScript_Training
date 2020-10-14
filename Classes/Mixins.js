let sayHiMixin = {
    sayHi() {
      alert(`Hello ${this.name}`);
    },
    sayBye() {
      alert(`Bye ${this.name}`);
    }
  };
  
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  Object.assign(User.prototype, sayHiMixin);
  
  new User("Dude").sayHi(); 