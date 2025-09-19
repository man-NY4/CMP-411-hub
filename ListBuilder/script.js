def addItemToList(item, listId):
    listElement = document.getElementById(listId)
    newItem = document.createElement("li")
    newItem.textContent = item
    listElement.appendChild(newItem)