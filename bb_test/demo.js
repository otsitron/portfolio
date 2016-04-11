// Define a Todo model
var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    title: '',
    completed: false
  }
});

// Instantiate the Todo model with a title, allowing completed attribute
// to default to false
var myTodo = new Todo({
  title: 'Check attributes property of the logged models in the console.'
});