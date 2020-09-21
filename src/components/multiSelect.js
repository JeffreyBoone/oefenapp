import React, { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class itemSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cSelected : useState([]),
      setCSelected : useState([])
    }

    onCheckboxBtnClick(selected) {
      const index = this.cSelected.indexOf(selected);
      if (index < 0) {
        this.cSelected.push(selected);
      } else {
        this.cSelected.splice(index, 1);
      }
      this.setCSelected([...this.cSelected]);
      }

    render() {
      return (
        <div>
          <h5>Checkbox Buttons</h5>
            <UncontrolledDropdown>
             <DropdownToggle caret>test<DropdownMenu>
                <DropdownItem color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.cSelected.includes(1)}>One</DropdownItem>
                <DropdownItem color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.cSelected.includes(2)}>Two</DropdownItem>
                <DropdownItem color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.cSelected.includes(3)}>Three</DropdownItem>
               </DropdownMenu></DropdownToggle>
             </UncontrolledDropdown>
          <p>Selected: {JSON.stringify(this.cSelected)}</p>
        </div>
    );
  }
}}