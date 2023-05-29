import React, { createRef } from 'react';

import { Url } from '../../types';

import * as classes from './buybutton.module.css';

type BuyButtonProps = {
  links: Url[],
  preorder?: boolean,
  title: string
}

export const BuyButton = ({links, preorder = false, title}: BuyButtonProps) => {
  const container = createRef<HTMLDivElement>();
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (container.current && !container.current.contains(event.target) && expanded) {
        setExpanded(false)
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  }, [expanded]);

  return (
    <div className={classes.dropdown} ref={container}>
      <button
        aria-controls="dropdown-list"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        title={title}
      >
        {preorder ? 'PRE-ORDER' : 'ORDER ONLINE'}
      </button>
      <ul id="dropdown-list" aria-hidden={!expanded}>
        {links.map(({text, url}) => (
          <li key={text}>
              <a href={url} target="_blank">{text}</a>
          </li>
        ))}
      </ul> 
    </div>
  );
}