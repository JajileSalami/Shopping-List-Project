
function addMe() {
  if (document.getElementsByTagName('li').length == 7) {
   document.getElementById('alert').innerHTML = "List is Full.";
   return;
  }
  
  if (document.getElementById('userOption').value ==="") {
    return;
  }

  else {
  var newList = document.createElement('li');
  var newText = document.createTextNode(document.getElementById('userOption').value);
  newList.appendChild(newText);
  var position = document.getElementsByTagName('ol')[0];
  position.appendChild(newList);
  document.getElementById('userOption').value = "";
    if (document.getElementsByTagName('li').length < 7) {
      document.getElementById('alert').innerHTML = "";
      return;
    }
  }
  
}

function removeMe() {
  var a = document.getElementById('userRemove').value;
  var y = parseInt(a)
  var getchild = document.getElementsByTagName('li')[y - 1];
  var getparent = getchild.parentNode;
  getparent.removeChild(getchild)
  if (document.getElementsByTagName('li').length < 7) {
      document.getElementById('alert').innerHTML = "";
      return;
    }
}