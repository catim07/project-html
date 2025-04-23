let userList=[]

if(localStorage.getItem("userList")){
    userList=JSON.parse(localStorage.getItem("userList"))
}else{
    localStorage.setItem("userList",JSON.stringify(userList))
}

function getElementData(dataForm){
    let tempData={}
    for(let eL of dataForm.elements){
        if(eL.name!=""){
            tempData[eL.name]=eL.value
        }
    }
    return tempData
}
function updateData(userList){
    localStorage.setItem("userList",JSON.stringify(userList))
}
function logout(){
    if(!confirm("bạn có chắc đăng xuất không")){
        return
    }
    localStorage.removeItem("userLogin")
    sessionStorage.removeItem("userLogin")
    window.location.href="./authen/signin.html"
}
function nextPageFood(){
    window.location.href=""
}
function nameUserLogin(){
    let nameUserLogin=document.getElementById("nameUserLogin")
    nameUserLogin.innerText=`${userLogin.email}`
}
nameUserLogin()