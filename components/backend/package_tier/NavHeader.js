import React from 'react';

const NavHeader = (props) => {
  const {name, target, active} = props;

  return (
    <>
      <li className="nav-item">
        <a className={`nav-link ${active ? 'active' : ''}`} data-toggle="tab" href={`#${target}`}>{name}</a>
      </li>
    </>
  )
}
export default NavHeader