if(sessionStorage.getItem('user')){
    var user = JSON.parse(sessionStorage.getItem('user'));
    // console.log(user);
    // console.log(("login: "+user.name));
    document.getElementById('loginname').innerHTML = user.name;
}else{
    alert("notlogin");
}

document.getElementById('signout').addEventListener('click',function(){
    sessionStorage.removeItem('user');
    alert("signout!!");
    location.reload();
});