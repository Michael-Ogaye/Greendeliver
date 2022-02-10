var buy = document.querySelectorAll('.order :nth-child(2)');
// buy.addEventListener("click", (e)=>{
// e.preventDefault();
//     console.log(e.target);
//     //  var pr = e.target.previousSiblingElement.children.innerText;

//     // var itema = document.querySelectorAll('em');
//     // console.log(itema);
//     // for(var i=0;i < itema.length;i++ );
//     // confirm(itema[i].innerTe;

// })

buy.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // console.log(e.target.parentElement.classList.contains('typo'))
        if (e.target.parentElement.classList.contains('order')) {
            let names = e.target.parentElement.previousElementSibling.children[0].textContent
            let price = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[2].children[0].textContent
            confirm(`Product: ${names} Price: ${price}`)
            console.log(e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[2].children[0].textContent)
            // let pos = fullPath.indexOf('img') + 3;
            // let partialPath = fullPath.slice(pos);

            // const item = {};

            // item.img = `img-cart${partialPath}`;
            // let name =
            //     e.target.parentElement.parentElement.nextElementSibling.children[0]
            //     .children[0].textContent;
            // item.name = name;
            // console.log(name)
            // let price =
            //     e.target.parentElement.parentElement.nextElementSibling.children[0]
            //     .children[1].textContent;
            // let finalPrice = price.slice(1).trim();
            // item.price = finalPrice;
        }

        // alert("Added 1    ")
        // console.log("hey  ")
    })
})