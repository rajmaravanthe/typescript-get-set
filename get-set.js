var person = (function () {
    function person() {
    }
    Object.defineProperty(person.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    person.prototype.personName = function (name) {
        if (name === this.name) {
            return "The username " + name + " is a valid User";
        }
        else {
            return "The username " + name + " is not a valid User";
        }
    };
    return person;
}());
var Person = new person();
Person.setName = "Hrithik Roshan";
document.write(Person.personName("Hrithik Roshani"));
