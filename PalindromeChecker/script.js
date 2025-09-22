function addItemToList() {
    item = document.getElementById('wordInput').value;
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