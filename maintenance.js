maintenance_type = ["Watch","Refresh","Update","Shutdown"]

class Environment {
    constructor(name) {
        this.name = name;
        // this.activities = [];
        this.activities = [];
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

let envs = [
    new Environment("Test1"),
    new Environment("Test2"),
    new Environment("Test3")
];

function populateEnvironmentList() {
    env_list = document.getElementById("env_list");
    envs.forEach((item,index) => {
        let option = document.createElement("option");
        option.value = index;
        option.text = item.name;
        console.log("Index: ",index);
        env_list.appendChild(option);
    })
}

function populateMaintType() {
    maint_type = document.getElementById("maint_type");
    maintenance_type.forEach((item,index) => {
        let option = document.createElement("option");
        option.value = index;
        option.text = item;
        // console.log("Index: ", index)
        maint_type.appendChild(option);
    });
}



window.onload = function () {
    populateEnvironmentList();
    // populateMaintType();
}