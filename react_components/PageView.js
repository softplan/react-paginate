'use strict';

import React from 'react';

const PageView = (props) => {
  let cssClassName = props.pageClassName;
  const linkClassName = props.pageLinkClassName;
  const onClick = props.onClick;
  const href = props.href;
  let ariaLabel = props.pageAriaLabel(props.page, props.extraAriaContext);
  let ariaCurrent = null;

  if (props.selected) {
    ariaCurrent = 'page';
    ariaLabel = props.currentPageAriaLabel(props.page);
    if (typeof(cssClassName) !== 'undefined') {
      cssClassName = cssClassName + ' ' + props.activeClassName;
    } else {
      cssClassName = props.activeClassName;
    }
  }

  return (
      <li className={cssClassName}>
          <a onClick={onClick}
             className={linkClassName}
             href={href}
             tabIndex="0"
             aria-label={ariaLabel}
             aria-current={ariaCurrent}
             onKeyPress={onClick}>
            {props.page}
          </a>
      </li>
  )
}

export default PageView;
