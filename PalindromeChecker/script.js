function addItemToList() {
    item = document.getElementById('wordInput').value;
    item = sanitize(item.trim());
    if (item === "") {
        alert("Input cannot be empty");
        return;
    } // validate input
    
    if (document.getElementsByName('listChoice')[0].checked) { // list1
        listElement = document.getElementById('list1Items');
        newItem = document.createElement("li");
        newItem.textContent = item + (": " + isPalindrome1(item));
        listElement.appendChild(newItem);
    } if (document.getElementsByName('listChoice')[1].checked) { // list2
        listElement = document.getElementById('list2Items');
        newItem = document.createElement("li");
        newItem.textContent = item + (": " + isPalindrome2(item));
        listElement.appendChild(newItem);
    } if (document.getElementsByName('listChoice')[2].checked) { // list3
        listElement = document.getElementById('list3Items');
        newItem = document.createElement("li");
        newItem.textContent = item + (": " + isPalindrome3(item));
        listElement.appendChild(newItem);
    }
} // add item to the selected list

function clearList(listId) {
    listElement = document.getElementById(listId);
    listElement.innerHTML = '';
} // clear the selected list

function isPalindrome1(str) { // self made algo
    if (document.getElementsByName('caseSensitive')[0].checked) {
        str = str;
    } else {
        str = str.toLowerCase();
    } // case sensitive
    
    str = str.replace(/[^A-Za-z0-9]/g, '');
    const reversed = str.split('').reverse().join('');
    return str === reversed;
} // algorithm 1

function isPalindrome2(str) { // google/stack overflow algo
    if (document.getElementsByName('caseSensitive')[0].checked) {
        str = str;
    } else {
        str = str.toLowerCase();
    } // case sensitive
    str = str.replace(/[^A-Za-z0-9]/g, '');
    left = 0;
    right = str.length - 1;
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
} // algorithm 2

function isPalindrome3(str) { // AI algo
    if (document.getElementsByName('caseSensitive')[0].checked) {
        str = str;
    } else {
        str = str.toLowerCase();
    } // case sensitive
   
     str = str.replace(/[^A-Za-z0-9]/g, '');

    // Recursive helper function
    function checkRecursive(left, right) {
        if (left >= right) {
            return true; // base case: middle reached
        }
        if (str[left] !== str[right]) {
            return false; // mismatch
        }
        return checkRecursive(left + 1, right - 1); // recursive step
    }

    return checkRecursive(0, str.length - 1);   
} // algorithm 3

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
} // sanitization