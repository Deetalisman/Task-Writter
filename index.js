
//-----------show add task section---------------//
const nav = document.querySelector('nav');
const open = document.querySelector('.add img');
 open.addEventListener('click', () => {
    console.log(nav)
    nav.classList.toggle('hidden');
 });

 
 let uList = document.querySelector('ul');
 let order = document.querySelector(".middle")
 console.log(uList.length);
const addTask = document.querySelector('#addtask');
const err = document.querySelector("small");
const addBox1 = document.querySelector('#open');
 addTask.addEventListener('click', function(e) {
   e.preventDefault();
   if(addBox1.value == ""){
    err.innerHTML = "add task"
   } else{
   // creating element
    const addBox = document.querySelector('#open').value;
    let list = document.createElement('li');
    let para = document.createElement('p');
    let radio = document.createElement('input');
    radio.setAttribute("type","checkbox");

    para.textContent = addBox;

    //appending element
     list.appendChild(para);
    list.appendChild(radio);
    uList.appendChild(list);

    list.classList.add('tasks');
    para.classList.add('one');


    const addBox1 = document.querySelector('#open');
    addBox1.value = "";
    err.innerHTML = ""



    //use radio to decorate line
   radio.addEventListener('click', function(e){
      para.classList.toggle('del');
   });
   //hide nav
   const nav = document.querySelector('nav');
    nav.classList.remove('hidden');  
  }
   });


  ///date 
  let date = document.querySelector('.date');
  date.textContent = new Date();


  
