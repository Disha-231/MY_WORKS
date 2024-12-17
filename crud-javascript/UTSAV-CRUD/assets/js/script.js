
const addtaskbtn = document.getElementById('addtask');
const btntext = addtaskbtn.innerHTML;
const taskname = document.getElementById('todotask');
let taskArray = [];
let edit_id = null;

let objstr = localStorage.getItem('tasks');
if (objstr != null) {
     taskArray = JSON.parse(objstr);
}
     
addtaskbtn.onclick=()=>{
     const task = taskname.value;

     if (edit_id!=null) {
          taskArray.splice(edit_id,1,{'task':task});
          edit_id=null;
     } else {
          taskArray.push({'task':task});
     }
     
     savetask(taskArray);
     taskname.value="";
     displaytask();
     addtaskbtn.innerHTML=btntext;
}

savetask=()=>{
     let str = JSON.stringify(taskArray)
     localStorage.setItem('tasks',str);
}

displaytask=()=>{
     let tsk='';
     taskArray.forEach((value,i) => {
           tsk += `<tr id="" style="font-size:18px;text-transform: capitalize;">
          <th scope="row">${i+1}</th>
          <td>${value.task}</td>
          <td></td>
          <td><i class="fa-regular fa-pen-to-square btn btn-light text-dark mx-3" onclick="edittask(${i})"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="btn text-danger btn-light fa-solid fa-trash" style="font-weight: 900;" onclick="deletetask(${i})"></i></td></tr>`
     });

     document.getElementById('mytasks').innerHTML=tsk;
}

displaytask();

const edittask=(id)=>{
     edit_id = id;
     taskname.value = taskArray[id].task;
     addtaskbtn.innerHTML='Save changes'; 
 }
const deletetask=(id)=>{

     taskArray.splice(id,1);
     savetask();
     displaytask();

}