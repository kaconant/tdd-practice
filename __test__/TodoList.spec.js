let should = require('should');
let TodoList = require('../TodoList.js');

describe('Todo List', () => {
  
  describe('Todo List creation', () => {
    
    var todoList;
    beforeEach(() => {
      todoList = new TodoList();
    })

    it('should be defined', () => {
      should.exist(todoList);
    })

    it('should be an object with an array of todos', () => {
      should(todoList).be.an.Object().with.key('todos');
      should(todoList).be.an.Array();
    })

    it('should start with no todos', () => {
      should(todoList.todos).be.empty();
    })

  })

  describe('Adding a Todo', () => {

    it('should create a todo object with "text" and "isComplete', () => {

    })

    it('should add the todo to the beginning of the list', () => {

    })

    it('should throw if no text is provided for the todo', () => {

    })

    it('should create uncompleted todos', () => {

    })

  })

  describe('Toggleing a Todo', () => {

    it('should change a todo from incomplete to complete and vice-versa', () => {

    })

  })

  describe('Deleting a Todo', () => {

    it('should remove todo', () => {

    })

  })
})