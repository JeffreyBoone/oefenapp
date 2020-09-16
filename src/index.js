import ReactDOM from 'react-dom';
import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Student from './student.js'; 

const DropdownName = 'Menu';
const posts = [
  {id: 1, title: 'title 1', content: 'content1'},
  {id: 2, title: 'title 2', content: 'content2'},
  {id: 3, title: 'title 3', content: 'content3'},
  {id: 4, title: 'title 4', content: 'content4'}
];

  const listItems = posts.map((post) =>
  <DropdownItem key = {post.id} >{post.title}</DropdownItem>
);

ReactDOM.render(
<div>
  <Student />
  <UncontrolledDropdown>
    <DropdownToggle caret>{DropdownName}
      <DropdownMenu>{listItems}</DropdownMenu>
    </DropdownToggle>
  </UncontrolledDropdown>
</div>, 
  document.getElementById('root'));