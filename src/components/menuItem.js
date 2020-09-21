import React, { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [cSelected, setCSelected] = useState([]);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }
  return (
    <div>
      <h5>Checkbox Buttons</h5>
        <UncontrolledDropdown>
            <DropdownToggle caret>test<DropdownMenu>
                <DropdownItem color="primary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>One</DropdownItem>
                <DropdownItem color="primary" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Two</DropdownItem>
                <DropdownItem color="primary" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Three</DropdownItem>
            </DropdownMenu></DropdownToggle>
        </UncontrolledDropdown>
      <p>Selected: {JSON.stringify(cSelected)}</p>
    </div>
  );
}

export default Example;