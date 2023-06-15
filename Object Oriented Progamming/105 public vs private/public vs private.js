class person{
    #age=26;
    constructor(name) {
        this.name=name;

    }

    showAge()
    {
        console.log(this.name+' is'+ this.#age + ' years old')
    }
}

const person1=new person('jubayer');
person1.showAge();

