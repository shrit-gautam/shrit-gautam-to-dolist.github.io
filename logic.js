window.onload = function(){
const newitem = document.querySelector('input');
    const addbutton = document.querySelector('.new > button');
     addbutton.addEventListener('click', function adding(){
        const done = document.querySelector('.done');
    const notdone = document.querySelector('.notdone');
    const list = document.createElement('li');
    const deletend = document.createElement('button');
    deletend.innerText="delete";
    
    const check = document.createElement("button");
    
    check.innerText="done";
    if(newitem.value!=''){
        
        list.textContent = newitem.value;newitem.value='';
        notdone.appendChild(list);
        deletend.classList.add('delete');
    check.classList.add('delete');
        list.appendChild(deletend);list.appendChild(check);
         
        
    }
    
    check.addEventListener('click', function(){
        check.style.display='none';
        done.appendChild(list)= notdone.appendChild(list);
        notdone.appendChild(list).remove();
        
    });
    deletend.addEventListener('click', function(){
        if(done.appendChild(list).value!=''){
            done.appendChild(list).remove();
        }
        else{
            notdone.appendChild(list).remove();
        }
    });
    });

}
    