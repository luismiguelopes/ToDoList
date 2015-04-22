

'use strict';
/*global window, $ */
window.app = {

  initialize: function () {
    this.bindEvents();
  },

  bindEvents: function () {
    var self = this;
    $('#save').click(function () {
      console.debug('Creating new element');
      self.createElement();
    });
  },

  bindRemoveElement: function (elem) {
    var self = this;
    elem.click(function (event) {
      self.removeElement(event);
    });
  },

  removeElement: function (event) {
      console.debug('Removing an item');
      var myElement = $(event.currentTarget);
      myElement.parent().remove();
  },

  createElement: function () {
      // fetch do conteúdo do input
        // criar um novo li com esse conteúdo
          // fazer append do li recém criado na nossa ul
      var content = $('#todo-input').val();

      if ( content.length > 0 ) {
        var fragmentStart = '<li><p>' + content;
        var fragmentEnd = '</p><div class="delete">Remove</div></li>';

        $('#todo-items-list').append(fragmentStart+fragmentEnd);
        $('#todo-input').val('');

        this.bindRemoveElement($('#todo-items-list li:last-child'));
      }
  }
};
window.app.initialize();
