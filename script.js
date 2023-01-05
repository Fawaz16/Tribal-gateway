const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const fifth = document.getElementById('fifth')
const sixth = document.getElementById('sixth')




function next(current){
    if(current ==='second'){
        second.style.display='none';
        third.style.display='block';
    }
    else if(current ==='third'){
        third.style.display='none';
        fourth.style.display='block';
    }
    else if(current ==='fourth'){
        fourth.style.display='none';
        fifth.style.display='block';
    }
    else if(current ==='fifth'){
        fifth.style.display='none';
        sixth.style.display='block';
    }

}

function previous(current){
   
    if(current ==='third'){
        second.style.display='block';
        third.style.display='none';
    }
    else if(current ==='fourth'){
        third.style.display='block';
        fourth.style.display='none';
    }
    else if(current ==='fifth'){
        fourth.style.display='block';
        fifth.style.display='none';
    }
    else if(current ==='sixth'){
        fifth.style.display='block';
        sixth.style.display='none';
    }
}
