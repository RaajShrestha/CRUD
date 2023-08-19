var form =document.getElementById("myForm"),
imgInput=document.querySelector(".img"),
file =document.getElementById("imgInput"),
name=document.getElementById("name"),
age=document.getElementById("age"),
city=document.getElementById("city"),
email=document.getElementById("email"),
phone=document.getElementById("phone"),
post=document.getElementById("post"),
sData=document.getElementById("sData"),
submitBtn=document.querySelector(".submit"),
userInfo=document.getElementById("data")

let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []
let isData= fasle,editId

file.onchange = function(){
    if(file.files[0].size < 10000000){
        var fileReader = new fileReader();

        fileReader.onload =function(e){
            imgUrl = e.target.result
            imgInput.scr = imgUrl
        }

        fileReader.readAsDataUrl(file.files[0])
    }
    else{
        alert("This file is too large!")
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const information={
        
    }
})