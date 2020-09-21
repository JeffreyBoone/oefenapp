import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class MyMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DropdownName : 'Menu',
      posts : [
        {id: 1, title: 'title1', content: 'content1'},
        {id: 2, title: 'title2', content: 'content2'},
        {id: 3, title: 'title3', content: 'content3'},
        {id: 4, title: 'title4', content: 'content4'}
      ],
      posts2: [
        {id: 5, title: 'title5', content: 'content4'},
        {id: 6, title: 'title6', content: 'content5'},
        {id: 7, title: 'title7', content: 'content6'},
        {id: 8, title: 'title8', content: 'content7'}
      ]
      };
    };

    
    
    renderDropdownItems(posts) {
      return posts.map((post) =>
          <DropdownItem key={post.id} onClick={this.changeValue}> {post.title} </DropdownItem>
      );
    }
    render() { 
        return <div>
         <UncontrolledDropdown>
                  <DropdownToggle caret>{this.state.DropdownName}
                    <DropdownMenu>{this.renderDropdownItems(this.state.posts)}</DropdownMenu>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown>
                  <DropdownToggle caret>{this.state.DropdownName}
                    <DropdownMenu>{this.renderDropdownItems(this.state.posts2)}</DropdownMenu>
                  </DropdownToggle>
                </UncontrolledDropdown>
                </div>
              }
}

export default MyMenu;