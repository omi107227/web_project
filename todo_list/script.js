let inputValue = document.querySelector("#input-val");
let outputValue = document.querySelector('.output-div');




const gettodolist=()=>{
    return JSON.parse(localStorage.getItem("todolistVal"));
}

const addToDoListlocalStorage =(localToDoLists)=>{
    return localStorage.setItem("todolistVal",JSON.stringify(localToDoLists));


}

let localToDoLists =gettodolist() || [];


const addToDoDynamicElement=(currElem)=>{
const divElement = document.createElement("div");
    divElement.classList.add("maintodolist");
    divElement.innerHTML=`<li>${currElem}</li><button class='delBtn'>Delete</button>`
    outputValue.append(divElement);

}

const addToDoList =(e)=>{
    e.preventDefault();
    //form tag automatically submit the form element to tackel it.
    
    const todolistValue = inputValue.value.trim();

    inputValue.value='';
if(todolistValue!=='' && !localToDoLists.includes(todolistValue)){
localToDoLists.push(todolistValue);
localToDoLists = [...new Set(localToDoLists)];
localStorage.setItem('todolistVal',JSON.stringify(localToDoLists));

addToDoDynamicElement(todolistValue);
}
};
 const showtodolist =()=>{
    localToDoLists.forEach((currElem) => {
        addToDoDynamicElement(currElem);
    });
 }
showtodolist();
const removeTodoElem =(e)=>{
const todoRemove = e.target;
let todoListContent = todoRemove.previousElementSibling.innerText;

let parentElem =todoRemove.parentElement;

localToDoLists = localToDoLists.filter((currtodo)=>{
    
    return currtodo !== todoListContent.toLowerCase();
});

addToDoListlocalStorage(localToDoLists);
parentElem.remove();
}


outputValue.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains("delBtn")){
        
    removeTodoElem(e);
    }
});

document.querySelector('.add-todo').addEventListener('click',(e)=>{

addToDoList(e);

});