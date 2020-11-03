let ul=document.getElementById('list');
let li;
let removeButton=document.querySelector('#remove');
removeButton.addEventListener('click',removeItem);
function removeItem(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index]&&li[index].children[0].checked){
            ul.removeChild(li[index])       
        } 
    }
}
let removeAllButton=document.querySelector('#removeAll');
    removeAllButton.addEventListener('click',removeAllItem);
    function removeAllItem(){
        //let ul=document.getElementById('list');
        // let li=ul.children;
        // console.log(li.length);
        // for (let index = 0; index < li.length; index++){
        //    while(li[index])
        //         ul.removeChild(li[index])               
        // } 
        ul.innerHTML='' 
        }

let addItemButton=document.querySelector('#add');
addItemButton.addEventListener('click',addItem);

let addOnEnter=document.getElementById('input');
addOnEnter.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addItem();
    }
});


function addItem(){
    let input=document.getElementById('input');
    let item=input.value;
    if(item===''||!(item.replace(/\s/g, '').length)) {
        return false;
        // let p=document.createElement('p');
        // p.textContent='Enter a Todo';
        // let div=document.querySelector('.controls');
        // div.insertBefore(p,div.children[2]);
    }
    else{
        li=document.createElement('li')
        //li.setAttribute('class','mycheck')
        let checkbox= document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');
        let label=document.createElement('label')
        label.textContent=item;
        li.appendChild(checkbox);
        li.appendChild(label);
        ul.insertBefore(li,ul.children[0])
        //ul.appendChild(li)
        input.value=""
        setTimeout(() => {
            li.className='mycheck'
        }, 2.5);
    }
}
// let checkOnClick=document.querySelector('li');
// checkOnClick.addEventListener('click',()=>{
//     // let tick=document.getElementById('check');
//     // if(tick.checked===false){
//         //tick.checked=true
//         document.getElementById('check').checked=true
//         console.log('ticked');
    
// })