const taskinput=document.getElementById('taskinput');
const tasklist=document.getElementById('tasklist'); 

// function addTask():

function addTask(){
    const taskText=taskinput.value.trim();
    if(taskText==="")return;
    const li=document.createElement('li');
    li.innerHTML=`
    <span>${taskText}</span>
    <button class=btn onclick="toggleTaskCompleted(this)">Done</button>
    <button class=btn onclick="editTask(this)">Edit</button>
    <button class=btn onclick="deleteTask(this)">Delete</button>
    `;


    tasklist.appendChild(li);
    taskinput.value="";
    }

    // done:
    function toggleTaskCompleted(button){
        const task=button.parentElement;
        task.classList.toggle('completed');
    }

    // edit:
    function editTask(button){
    const task=button.parentElement;
    const span=task.querySelector('span');
    const newText=prompt("Edit the Text:", span.innerText);
    if(newText!==""){
        span.innerText=newText;
    }else{
        alert("please Enter the valid text")
    }
    }
   
    // Delete:
    function deleteTask(button){
     const task=button.parentElement;
     task.remove();
    }