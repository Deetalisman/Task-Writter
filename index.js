const nav = document.querySelector('nav');
const open = document.querySelector('.add img');
 open.addEventListener('click', () => {
    console.log(nav)
    nav.classList.toggle('hidden');
 });

 
 let uList = document.querySelector('ul');
 let order = document.querySelector(".middle")
 console.log(order.length);
const addTask = document.querySelector('#addtask');

 addTask.addEventListener('click', function(e) {
   e.preventDefault();
   

   // creating element
    const addBox = document.querySelector('#open').value;
    let list = document.createElement('li');
    let para = document.createElement('p');
    let radio = document.createElement('input');
    radio.setAttribute("type","radio");

    para.textContent = addBox;

    //appending element
     list.appendChild(para);
    list.appendChild(radio);
    uList.appendChild(list);

    list.classList.add('tasks');
    para.classList.add('one');

   list.addEventListener('click', function(e){
      radio.checked = true;
      para.classList.toggle('del');

   });
   const nav = document.querySelector('nav');
    nav.classList.remove('hidden');
 
 });


 /*const myTask = document.querySelector('li');
 const one = document.querySelector('.one');
 myTask.addEventListener('click' , function(e){
    one.classList.toggle('del');
  });*/

 let list = document.querySelectorAll('li');
 list.forEach(list => {
   list.addEventListener('click', function(e){
          const one = document.querySelector('.one');

   })
 });

  function hide(){
    
  }



//chack radio
  function checktheradio(){
   document.getElementById("two").checked = true;
   const one = document.querySelector('.one');
        one.classList.toggle('del');

  };
  
  ///date 
  let date = document.querySelector('.date');
  date.textContent = new Date();

  function uncheck(){
   radio.checked = false;
   document.getElementById("two").checked = false;

}
  
