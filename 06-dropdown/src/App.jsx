var React = require('react');
var Dropdown = require('./Dropdown');

var options = {
  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

// step 2 - instantiate class and render
var element = React.createElement(Dropdown, options);

// step 3 - place instantiation in my body tag
React.render(element, document.querySelector('.container'));
