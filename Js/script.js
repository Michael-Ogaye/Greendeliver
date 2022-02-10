var buy = document.querySelector('.order :nth-child(2)');
buy.addEventListener("click", (e)=>{
e.preventDefault();
    console.log(e.target);
     var pr = e.target.previousSiblingElement.children.innerText;
    confirm(pr);

})