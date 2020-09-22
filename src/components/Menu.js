import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DropdownName: 'Menu',
      displayName: "Test",
      setDropdownOpen: false,
      dropdownOpen: false,
      index: 0,
      cSelected: [],
      stringCSelected: [],
      posts: [
        { id: 1, title: 'title1', content: 'content1' },
        { id: 2, title: 'title2', content: 'content2' },
        { id: 3, title: 'title3', content: 'content3' },
        { id: 4, title: 'title4', content: 'content4' }
      ],
      posts2: [
        { id: 5, title: 'title5', content: 'content4' },
        { id: 6, title: 'title6', content: 'content5' },
        { id: 7, title: 'title7', content: 'content6' },
        { id: 8, title: 'title8', content: 'content7' }
      ]
    };
  };

  toggle = (e) => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  updateArray = (selected) => {
    this.index = this.state.cSelected.indexOf(selected);
    if (this.index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(this.index, 1);
    }
    this.setState({ stringCSelected: this.state.cSelected })
  }

  renderDropdownItems = (posts) => {
    return posts.map((post) =>
      <DropdownItem key={post.id} onClick={(e) => this.updateArray(post.id)} active={this.state.cSelected.includes(post.id)} toggle={false}> {post.title} </DropdownItem>
    );
  }

  render() {
    return (<div ref={this.dropdown}>
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>{this.state.DropdownName}</DropdownToggle>
        <DropdownMenu>
          {this.renderDropdownItems(this.state.posts)}
        </DropdownMenu>
      </Dropdown >
      <p>Selected: {this.state.stringCSelected.toString()}</p>
    </div>)
  }
}