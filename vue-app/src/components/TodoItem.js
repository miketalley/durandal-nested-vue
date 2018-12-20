define([
  'vue'
], (Vue) => {
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  });
});