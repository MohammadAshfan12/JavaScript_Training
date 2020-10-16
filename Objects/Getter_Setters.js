const Person = {
    firstName: 'John',
    lastName: 'Wick',
    get fullName() {
        return `${Person.firstName} ${Person.lastName}`;
    },
    set fullName(value) {
        const newName = value.split(' ');
        [this.firstName, this.lastName] = newName;
         
    }
}

Person.fullName = 'The Rock';
console.log(Person.fullName)
