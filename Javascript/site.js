function CreatePopUp() {
    alert("This is an alert!");
}

function AddAlert() {
    var element = document.getElementById("addAlert");
    var node = document.createElement("p");
    node.innerText = "Button clicked";
    element.appendChild(node);
}

function LogToConsole()
{
    console.log("Well done you know how to look at the browser console");
}