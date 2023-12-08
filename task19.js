let formEle = document.getElementById("htmlForm");
formEle.addEventListener("submit",storeDetails);


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