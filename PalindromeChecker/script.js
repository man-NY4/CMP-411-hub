function addItemToList() {
    item = document.getElementById('wordInput').value;
    if (document.getElementsByName('listChoice')[0].checked) {
        listElement = document.getElementById('list1Items');
    } else {
        listElement = document.getElementById('list2Items');
    }
    newItem = document.createElement("li");
    newItem.textContent = item;
    listElement.appendChild(newItem);
}

function clearList(listId) {
    listElement = document.getElementById(listId);
    listElement.innerHTML = '';
}