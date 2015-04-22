'use strict';
window.app = {

  // Initialize - start running our webapp
  initialize: function () {
    if ( !( window.localStorage.getItem('todo-list') ) ) {
      console.debug('Creating list for the very first time!');
      window.localStorage.setItem('todo-list', '{ "items": [] }');
    }
    this.loadItems();
    this.bindEvents();
  },

  // Bind Events - add all the necessary event handlers to deal with the webapps behaviour
  bindEvents: function () {
    var self = this;
    $('#save').click(function () {
      self.saveItem();
    });
  },

  // Load Items - cycle through all items in localstorage and create item within our webapp
  loadItems: function () {
    var list = window.localStorage.getItem('todo-list');
    if (list) {
      console.debug('Great we already have a todo-list in cache!');

      for (var i = $.parseJSON(list).items.length - 1; i >= 0; i--) {
        this.createItem($.parseJSON(list).items[i]);
      }
    }
  },

  // Create Item - creates the necessary DOM elements and appends them to the DOM
  createItem: function (newText) {
    var fragmentStart = '<li><p>' + newText;
    var fragmentEnd = '</p><div class="delete">Remove</div></li>';

    $('#todo-items-list').append(fragmentStart+fragmentEnd);
  },

  // Save Item - store an item in localstorage and reload the webapp
  saveItem: function () {
    // Fetch the text from the input field
    var newtext = $('#todo-input').val();

    // Get the current app state (i.e. fetch all todo items saved previously)
    var currentAppState = $.parseJSON(window.localStorage.getItem('todo-list'));
    currentAppState.items.push(newtext);

    // Save the new app state
    window.localStorage.setItem('todo-list', JSON.stringify(currentAppState));

    // Refresh the webapp
    window.location.reload();
  },

  // Remove Item - remove a certain item from localstorage and reload the webapp
  removeItem: function () {
  }

};

window.app.initialize();

