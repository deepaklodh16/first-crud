function validateform(){
    var  name = document.getElementById("name").value ;
    var  age = document.getElementById("Age").value ;
    var  Email = document.getElementById("Email").value ;
    var  Address = document.getElementById("Address").value ;

    if(name == ""){
        alert("name is required")
        return false;
    }
    if(age == ""){
        alert("age is required")
        return false;
    }
    else if(age < 1){
     alert("age should not be 0 or less than 0")
     return false
    }
    if(Email == ""){
        alert("Email is required")
        return false;
    }
    if(Address == ""){
        alert("Address is required")
        return false;
    }
   else  if(!Email.includes("@")){
        alert("enter valid email address")
        return false;
    }
    return true ;

}

function showData (){
    var peopleList ;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList")) ;
    }
   var html = "" ;
   peopleList.forEach(function (element , index) {
    html += "<tr>" ;
    html += "<td>" + element.name + "</td>" ;
    html += "<td>" + element.Age + "</td>" ;
    html += "<td>" + element.Email + "</td>" ;
    html += "<td>" + element.Address + "</td>" ;
    html += '<td> <button onclick = "deleteData('+ index +')" class = "btn btn-danger" > delete </button> <button onclick = "updateData('+   index +')" class= "btn btn-success">edit</button></td>' ;
              html += "</tr>" ;
          });
    document.querySelector("#crudtable tbody").innerHTML = html ;


}
document.onload = showData() ;

function AddData(){
   
      if (validateform() == true){   
        var  name = document.getElementById("name").value ;
        var  age = document.getElementById("Age").value ;
        var  Email = document.getElementById("Email").value ;
        var  Address = document.getElementById("Address").value ;  

    var peopleList ;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }
    peopleList.push(
        {name : name , 
        Age : age ,
        Email : Email , 
        Address : Address}
    );

    localStorage.setItem("peopleList" , JSON.stringify(peopleList)) ;
    showData();
    document.getElementById("name").value = "" ;
    document.getElementById("Age").value = "" ;
    document.getElementById("Email").value = "" ;
    document.getElementById("Address").value = "" ;



    }
}

function deleteData(index){
    var peopleList ;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }
    peopleList.splice(index , 1);
    localStorage.setItem("peopleList" , JSON.stringify(peopleList)) ;
    showData();
}

function updateData (index){

    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block" ;

    var peopleList ;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList")) ;
    }
    document.getElementById("name").value = peopleList[index].name ;
    document.getElementById("Age").value = peopleList[index].Age ;
    document.getElementById("Email").value = peopleList[index].Email ;
    document.getElementById("Address").value = peopleList[index].Address ;

    document.querySelector("#update").onclick = function (){
        if (validateform() == true){   
            peopleList[index].name = document.getElementById("name").value ;
            peopleList[index].Age = document.getElementById("Age").value ;
            peopleList[index].Email = document.getElementById("Email").value ;
            peopleList[index].Address = document.getElementById("Address").value ; 

            localStorage.setItem("peopleList" , JSON.stringify(peopleList)) ;
            showData();

            document.getElementById("name").value = "" ;
            document.getElementById("Age").value = "" ;
            document.getElementById("Email").value = "" ;
            document.getElementById("Address").value = "" ;

            document.getElementById("submit").style.display = "block" ;
            document.getElementById("update").style.display = "none" ;
        }
    }
}