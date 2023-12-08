let formEle = document.getElementById("htmlForm");
formEle.addEventListener("submit",storeDetails);

let listEle = document.getElementById("unordered-list");



function storeDetails(e){
    e.preventDefault();

    //collecting info:

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    //creating object:

    let detailsObj = {
        "name" : name ,
        "email" : email ,
        "phone" : phone
    }

    //converting object to JSON format:


    axios.post("https://crudcrud.com/api/d0d033c9cafd4f1abf935b88bf4a35f4/trail-2",detailsObj)
        .catch((err)=> console.log(err));

}




function displayElement(Dname,Demail,Dphone,Did){
    let listElementIn = document.createElement("li");
    listElementIn.textContent = Dname+" "+Demail+" "+Dphone;
    listEle.appendChild(listElementIn);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    listElementIn.appendChild(editButton);

    let delButton = document.createElement("button");
    delButton.textContent = "Delete";
    listElementIn.appendChild(delButton);

    delButton.addEventListener("click", ()=>{
          axios.delete(`https://crudcrud.com/api/d0d033c9cafd4f1abf935b88bf4a35f4/trail-2/${Did}`)
               .then((res)=>listEle.removeChild(listElementIn))
               .catch((err)=> console.log(err))
    });

    

}



function extraxtElement(res){
    let Dname,Demail,Dphone,Did;

    for (let i=0;i<res.length;i++){
        Dname = res[i].name;
        Demail = res[i].email;
        Dphone = res[i].phone;
        Did = res[i]._id;
      //  console.log(Did);

        displayElement(Dname,Demail,Dphone,Did);
    }

}

axios.get("https://crudcrud.com/api/d0d033c9cafd4f1abf935b88bf4a35f4/trail-2")
    .then((res) => {
        extraxtElement(res.data);
    })
    .catch((err)=> console.log(err));