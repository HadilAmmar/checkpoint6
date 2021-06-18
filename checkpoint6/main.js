var likes =document.getElementsByClassName('like') 
for(i=0;i<likes.length;i++) {
    let like=likes[i];
    like.addEventListener('click',function(){
        if(like.style.color=='red'){
            like.style.color ='black'
        }
        else{
        like.style.color='red';
        }
    })
}


 

var delets =document.getElementsByClassName('delete') 
for(i=0;i<delets.length;i++) {
    let dlt = delets[i];
    dlt.addEventListener('click',function(){
    
 dlt.parentElement.remove()
    })
}



var adding = document.getElementsByClassName("plus-btn")
for (let i=0 ; i<adding.length; i++){
    let add = adding[i];
    add.addEventListener("click",function(){
        add.previousElementSibling.value ++;
        totalprice()
    })
}



var subtract = document.getElementsByClassName("minus-btn")
for (let i=0; i<subtract.length ; i++){
    let sub = subtract[i];
    sub.addEventListener("click",function(){
    if ( sub.nextElementSibling.value>1 ){
    sub.nextElementSibling.value--;
    totalprice()
}
   })
}



 function totalprice() {
            var items = document.getElementsByClassName("Item")
            var total = 0
            for (let i = 0; i < items.length; i++) {
                var Price = items[i].querySelector(".price")
                var qyt = items[i].querySelector(".Quant")
                total = (Price.innerHTML * qyt.value) + total
            }
            document.getElementById("finalPrice").value = total
        }
