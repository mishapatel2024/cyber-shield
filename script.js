function sendMessage(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    document.getElementById("output").innerText = "⚠️ Please fill all fields";
    document.getElementById("output").style.color = "red";
  }
  else{
    document.getElementById("output").innerText =
    "✅ Thank you " + name + "! Your message has been sent successfully.";

    document.getElementById("output").style.color = "green";

    // clear fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}