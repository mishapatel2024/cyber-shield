function checkEmail(){
  let emailText = document.getElementById("email").value;
  let result = document.getElementById("result");

  if(emailText === ""){
    result.innerText = "⚠️ Please enter email text";
    result.style.color = "red";
    return;
  }

  // Simple phishing detection logic
  let lowerText = emailText.toLowerCase();

  if(
    lowerText.includes("password") ||
    lowerText.includes("verify") ||
    lowerText.includes("bank") ||
    lowerText.includes("click here") ||
    lowerText.includes("urgent")
  ){
    result.innerText = "🚨 WARNING: This looks like PHISHING email!";
    result.style.color = "red";
  } else {
    result.innerText = "✅ Safe email (no strong phishing signs detected)";
    result.style.color = "green";
  }
}
