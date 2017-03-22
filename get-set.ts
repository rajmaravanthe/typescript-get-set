
class person {
    name: string;

    set setName (name: string) {
        this.name = name;
    }

    get getName () {
        return this.name;
    }

    personName (name: string) {
        if(name === this.name) {
            return `The username ${name} is a valid User`
        } else {
            return `The username ${name} is not a valid User`
        }
    }
}

var Person = new person();
Person.setName = "Hrithik Roshan";

document.write(Person.personName("Hrithik Roshan"));