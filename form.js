function buat_login(){
    var elem = document.getElementById("x");
    elem.parentElement.removeChild(elem);
    var p = document.createElement("p");
    p.className = "tulisan_login";
    p.innerHTML = "SILAHKAN MENDAFTAR";
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p);
    var form = document.createElement("form");
    element.appendChild(form);

    var labeluser = document.createElement("label");
    labeluser.innerHTML = "Nama User";
    form.appendChild(labeluser);
    var input_namauser = document.createElement("input");
    input_namauser.type = "text";
    input_namauser.name = "namauser";
    input_namauser.className = "form_login";
    input_namauser.value = "Nama User..";
    form.appendChild(input_namauser);

    var labelnomor = document.createElement("label");
    labelnomor.innerHTML = "Nomor Handphone";
    form.appendChild(labelnomor);
    var input_nomor = document.createElement("input");
    input_nomor.type = "text";
    input_nomor.name = "nomor";
    input_nomor.className = "form_login";
    input_nomor.value = "Nomor Handphone.";
    form.appendChild(input_nomor);    

    var label = document.createElement("label");
    label.innerHTML = "Username";
    form.appendChild(label);
    var input_username = document.createElement("input");
    input_username.type = "text";
    input_username.name = "username";
    input_username.className = "form_login";
    input_username.value = "Username atau Email ..";
    form.appendChild(input_username);
    var label2 = document.createElement("label");
    label2.innerHTML = "Password";
    form.appendChild(label2);
    var input_password = document.createElement("input");
    input_password.type = "password";
    input_password.name = "password";
    input_password.className = "form_login";
    input_password.value = "Password ..";
    form.appendChild(input_password);
    var tombol = document.createElement("input");
    tombol.type = "submit";
    tombol.className = "tombol_login";
    form.appendChild(tombol);
}