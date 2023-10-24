// coding implementation
// end coding implementation
function formHD() {
    let x = document.forms['form']["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    var y = document.forms['form']['rate'].value
    if(y ==''|| isNaN(y)){
        alert('Please rate us ?')
        return false
    }
  }
