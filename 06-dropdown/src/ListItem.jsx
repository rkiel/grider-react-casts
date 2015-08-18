var React = require('react');

var ListItem = React.createClass({
  render: function() {
    return (
      <li className={this.props.className} >
        <a onClick={handleClick.bind(this,this)}>
          {this.props.item}
        </a>
      </li>
      );
  }
});

module.exports = ListItem;

function handleClick() {
  this.props.whenItemClicked(this.props.item);
}
