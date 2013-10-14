// Define todo model
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

// Instantiate Todo model with a title
var myTodo = new Todo({
  title: "Check attributes property of the logged models in the console"
});

var TodoView = Backbone.View.extend({
  tagName: 'li',

  // Cache the template function for a single item.
  todoTpl: _.template( $('#item-template').html() ),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  initialize: function() {
    this.$el = $('#todo');
  },

  render: function() {
    this.$el.html( this.todoTpl( this.model.toJSON() ) );
    //Replace HTML of DOM element with result of instantiatoing a template with model's attributes
    this.input = this.$('.edit');
  }
}) 


