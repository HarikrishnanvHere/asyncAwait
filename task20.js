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


    axios.post("https://crudcrud.com/api/ff71cac2139b41f79e133a34c06ecf61/trail-2",detailsObj)
        .catch((err)=> console.log(err));

}




function displayElement(Dname,Demail,Dphone){
    let listElementIn = document.createElement("li");
    listElementIn.textContent = Dname+" "+Demail+" "+Dphone;
    listEle.appendChild(listElementIn);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    listElementIn.appendChild(editButton);

    let delButton = document.createElement("button");
    delButton.textContent = "Delete";
    listElementIn.appendChild(delButton);

}



function extraxtElement(res){
    let Dname,Demail,Dphone;

    for (let i=0;i<res.length;i++){
        Dname = res[i].name;
        Demail = res[i].email;
        Dphone = res[i].phone;

        displayElement(Dname,Demail,Dphone);
    }

}

axios.get("https://crudcrud.com/api/ff71cac2139b41f79e133a34c06ecf61/trail-2")
    .then((res) => {
        extraxtElement(res.data);
    })
    .catch((err)=> console.log(err));