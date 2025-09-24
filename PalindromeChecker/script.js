function addItemToList() {
    item = document.getElementById('wordInput').value;
    item = sanitize(item.trim());
    if (item === "") {
        alert("Input cannot be empty");
        return;
    }  
    if (document.getElementsByName('listChoice')[0].checked) {
        listElement = document.getElementById('list1Items');
    } if (document.getElementsByName('listChoice')[1].checked) {
        listElement = document.getElementById('list2Items');
    } if (document.getElementsByName('listChoice')[2].checked) {
        listElement = document.getElementById('list3Items');
    }
    newItem = document.createElement("li");
    newItem.textContent = item;
    listElement.appendChild(newItem);
}

function clearList(listId) {
    listElement = document.getElementById(listId);
    listElement.innerHTML = '';
}

function isPalindrome1(str) {
    const normal = str.replace(/[^A-Za-z0-9]/g, '');
    const reversed = normal.split('').reverse().join('');
    return normal === reversed;
}

function isPalindrome2(str) {}

function isPalindrome3(str) {}

function sanitize(string) {
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, (match)=>(map[match]));
}