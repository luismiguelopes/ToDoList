'use strict';
/*global window, $ */
window.app = {

  initialize: function () {
    if ( !( window.localStorage.getItem('todo-list') ) ) {
      console.debug('Creating list for the very first time!');
      window.localStorage.setItem('todo-list', '{ items: [] }');
    }
    this.loadItems();
    this.bindEvents();
  },

  loadItems: function () {
    var list = window.localStorage.getItem('todo-list');
    if (list) {
      console.debug('Great we already have a todo-list in cache!');

      for (var i = $.parseJSON(list).items.length - 1; i >= 0; i--) {
        this.createItem($.parseJSON(list).items[i]);
      }
    }
  },

  createItem: function (newText) {
    var fragmentStart = '<li><p>' + newText;
    var fragmentEnd = '</p><div class="delete">Remove</div></li>';

    $('#todo-items-list').append(fragmentStart+fragmentEnd);
    $('#todo-input').val('');

    // guardar na lista de elementos
    //this.storeItem(newText);
  },
  removeItem: function () {
    // remover elemento da lista de elementos guardados
    // actualizar ecrã
  }

};

window.app.initialize();

