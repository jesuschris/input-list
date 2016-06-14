(function() {
	//Templates used here. Makes it easy to update.
  var listBodyTemplate = '<input-list-body>' +
    '<button data-list-id="%n-item-list" class="input-list-add-button">+</button>' +
    '<span><input class="input-list-add-text" type="text" title="New Item" /></span>' +
    '<ul id="%n-item-list" data-form-input-id="%n-form-input"></ul>' +
    '<input id="%n-form-input" name="%n" class="input-list-form-input" value="[]" />' +
    '</input-list-body>';

  var listItemTemplate = '<button data-list-id="%n" class="input-list-remove-button">-</button>' +
    '<p>%v</p>';

  //Generates the HTML elements and structure for the lists.
  var generateInputList = function(listElement) {
    var name = listElement.getAttribute('name');
    /* Other attributes possible... oh boy!
      var max = listElement.getAttribute('max');
      var min = listElement.getAttribute('min');
    */
    listElement.innerHTML += listBodyTemplate.replace(new RegExp('%n', 'g'), name);
    listElement.getElementsByClassName('input-list-add-button')[0].addEventListener('click', addButtonClick);
  };

  //Adds an item to the list
  var addButtonClick = function(e) {
    e.preventDefault();
    var input = this.parentElement.getElementsByClassName('input-list-add-text')[0];
    if (!(input.value.match(/^ *$/) !== null || input.value === null)) {
      var newItem = document.createElement('li');
      newItem.innerHTML = listItemTemplate.replace('%v', input.value).replace('%n', this.dataset.listId);
      this.parentElement.getElementsByTagName('ul')[0].appendChild(newItem);
      newItem.getElementsByClassName('input-list-remove-button')[0].addEventListener('click', removeButtonClick);
      input.value = '';
      resolveJSONList(this.dataset.listId);
      newItem.className += 'show';
    }
  };

  //Removes an item from the list
  var removeButtonClick = function(e) {
    e.preventDefault();
    var btn = this;
    var li = this.parentElement;
    var ul = li.parentElement;
    li.className = "";
    setTimeout(function() {
      ul.removeChild(li);
      resolveJSONList(btn.dataset.listId);
    }, 250);
  };

  //Creates JSON object from items in list
  var resolveJSONList = function(listId) {
    var listElement = document.getElementById(listId);
    var listEntries = listElement.getElementsByTagName('li');
    var entries = [];
    for (var i = 0; i < listEntries.length; i++) {
      entries.push(listEntries[i].getElementsByTagName('p')[0].innerText);
    }
    document.getElementById(listElement.dataset.formInputId).value = encodeURIComponent(JSON.stringify(entries));
  };

  //Generates our list structure for each input-list element
  window.onload = function() {
    var lists = document.getElementsByTagName('input-list');
    for (var i = 0; i < lists.length; i++) {
      generateInputList(lists[i]);
    }
  };
})();
