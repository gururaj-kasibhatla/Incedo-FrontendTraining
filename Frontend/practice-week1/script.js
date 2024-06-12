var taskInp = document.getElementById("taskInput");
var addTask = document.getElementById("addTaskBtn");
var alertMsg = document.getElementById("alert");

//Hides alert 
alertMsg.style.display = "none";


//Event listener for addTaskBtn
// addTask.addEventListener("click", function () {
//     var task = taskInp.value;
//     // displays alert
//     if (task.length== 0) {
//         alertMsg.style.display = "block";
//         return;
//     }
//     alertMsg.style.display = "none";
//     var list = document.getElementById("taskList");
//     list.innerHTML+=task+"<br>"
    
//     taskInp.value="";

// })
var list = [];
addTask.addEventListener("click", function () {
    var task = taskInp.value;
    // displays alert
    if (task.length== 0) {
        alertMsg.style.display = "block";
        return;
    }
    alertMsg.style.display = "none";
    var tasks = document.getElementById("taskList");
    list.push(task);
    var html="<ul>";
    
    list.forEach((task)=>{
        html=html+"<li>"+task+"</li>"
    })

    tasks.innerHTML+=html+"</ul>"
    
    taskInp.value="";

})

