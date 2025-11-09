maintenance_type = [
    {value: 0, maint: "Watch"},
    {value: 1, maint: "Refresh"},
    {value: 2, maint: "Update"},
    {value: 3, maint: "ShutDown"}
]

function populateMaintType() {
    maint_type = document.getElementById("maint_type");
    maintenance_type.forEach((item) => {
        let option = document.createElement("option");
        option.value = item.value;
        option.text = item.maint;
        maint_type.appendChild(option);
    });
}

window.onload = function () {
    populateMaintType();

}