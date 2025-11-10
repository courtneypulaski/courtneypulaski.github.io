class Environment {
    constructor(name) {
        this.name = name;
        // this.activities = [];
        this.activities = [new Activity("Update",123)];
    }
    newact(activity) {
        this.activities.push(activity);
    }
}

class Activity {
    constructor(type,person) {
        this.type = type;
        this.person = person;
        this.date = new Date();
    }
}

let env = new Environment("Test1");
console.log(env.activities);
console.log(env.activities[0].type);
env.newact(new Activity("Delete",456));
console.log(env.activities);
console.log(env.activities[1].type);