import React, {PureComponent} from 'react';
import './buybutton.css';

class BuyButton extends PureComponent {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      expanded: false
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({expanded: !this.state.expanded});
  }

  handleClickOutside(event) {
    if (this.container.current && !this.container.current.contains(event.target)) {
      if (this.state.expanded) {
        this.toggleDropdown();
      }
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  } 

  render() {
    const {links, preorder, title} = this.props;
    const {expanded} = this.state;

    return (
      <div className="dropdown" ref={this.container}>
        <button
          onClick={this.toggleDropdown}
          title={title}
          aria-expanded={expanded}
          aria-controls="dropdown-list">
          {preorder ? 'PRE-ORDER' : 'ORDER ONLINE'}
        </button>
        <ul id="dropdown-list" aria-hidden={!expanded}>
          {links.length && links.map(({text, url}) => (<li key={text}><a href={url} target="_blank">{text}</a></li>))}
        </ul> 
      </div>
    );
  }
}

export default BuyButton;
