if(localStorage.getItem("userLogin")){
    window.location.href="./index.html"
}
function signUp(e){
    e.preventDefault()
    let temp=e.target
    let value=getElementData(temp)
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!value.email || !value.password || !value.name) {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
      }
    if (!gmailRegex.test(value.email)) {
      alert("Email không hợp lệ! Vui lòng dùng địa chỉ Gmail");
      return;
    }
    const isExist = userList.some(user => user.email === value.email);
  if (isExist) {
    alert("Email đã được sử dụng");
    return;
  }
  if (value.password.length < 8) {
    alert("Mật khẩu phải có ít nhất 8 ký tự");
    return;
  }
  if (value.password === value.email) {
    alert("Mật khẩu không được trùng với email");
    return;
  }
    userList.push(value)
    updateData(userList)
    temp.reset()
    window.location.href="../index.html"
}
function signIn(e){
    e.preventDefault()
    let temp=e.target
    let check=userList.find(e=>e.email==temp.email.value)
    if(!check){
        showAlertWithIcon("error", "Tài khoản không tồn tại");
        return
    }
    if(check.password!=temp.password.value){
        showAlertWithIcon("error", "Mật khẩu không chính xác");
        return
    }
    let userLogin={
        email: temp.email.value,
        password: temp.password.value
    }
    if(temp.rememberme.checked){
        localStorage.setItem("userLogin",JSON.stringify(userLogin))
    }else{
        sessionStorage.setItem("userLogin",JSON.stringify(userLogin))
        
    }
    showAlertWithIcon("success", "Đăng nhập thành công");
    window.location.href="../index.html"
}
function showAlertWithIcon(type, message) {
    const alertContainer = document.getElementById("alert-container");
    let icon = "";
    let alertClass = "";
    let label = "";
    if (type === "success") {
        icon = "#check-circle-fill";
        alertClass = "alert-success";
        label = "Success:";
    } else {
        icon = "#exclamation-triangle-fill";
        alertClass = "alert-danger";
        label = "Danger:";
    }
    alertContainer.innerHTML = `
        <div class="alert ${alertClass} d-flex align-items-center alert-dismissible fade show" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="${label}">
                <use href="#${icon}"/>
            </svg>
            <div>${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}


