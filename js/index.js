
window.onload = function() {

    btnTwo.addEventListener("click" , function(){
        document.getElementById("hide").style.display='none';
         btnTwo.classList.add("categoryActiv"); 
         btnOne.classList.remove("categoryActiv"); 
});

    
  btnOne.addEventListener("click" , function(){
        document.getElementById("hide").style.display='block';
        btnOne.classList.add("categoryActiv"); 
         btnTwo.classList.remove("categoryActiv"); 

});
};