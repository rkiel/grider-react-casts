var React = require('react');
var Button = require('./Button');
var ListItem = require('./ListItem');

var Dropdown = React.createClass({
  getInitialState: function() {
    return {
      open: false
    };
  },

  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem item={item} 
                       whenItemClicked={handleItemClick.bind(this,this)}
                       className={this.state.itemTitle === item ? 'active' : ''} />
    }.bind(this));

    return (
      <div className='dropdown'>
        <Button whenClicked={handleClick.bind(this,this)} 
                className='btn-default' 
                title={this.state.itemTitle || this.props.title}
                subTitleClassName='caret' />
        <ul className={'dropdown-menu' + (this.state.open ? ' show' : '')}>
          {list}
        </ul>
      </div>
    );
  }
});

module.exports = Dropdown;

function handleClick(component) {
  component.setState({
    open: !this.state.open
  });
}

function handleItemClick(component, item) {
  component.setState({
    open:      false,
    itemTitle: item
  });
}
