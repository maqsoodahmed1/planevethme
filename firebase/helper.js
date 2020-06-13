function checkauth()
{
  var uid = localStorage.getItem("currentuser");
  console.log(uid)
  var pathname = location.pathname;
  

 console.log(uid)
  if (uid){

    
      location.assign("/planevepanel/argon-dashboard-master/examples/sample.html");

  }
 
  else {
    if (pathname === "/planevepanel/argon-dashboard-master/examples/sample.html" ) {
      location.assign("/home.html");
    }
  }
}


