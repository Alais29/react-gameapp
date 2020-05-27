import React, { Fragment } from "react";
import Subtitle from './../Subtitle/Subtitle.component';
import "./Lists.styles.scss";

const TextList = ({ title, items, platforms }) => (
  <Fragment>
    <Subtitle text={title} />
    {items ? (
      <ul className="list">
        {items.map((item) => (
          <li className="list__item" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    ) : null}
    {platforms ? (
      <ul className="list">
        {platforms.map((item) => (
          <li className="list__item" key={item.platform.id}>
            {item.platform.name}
          </li>
        ))}
      </ul>
    ) : null}
  </Fragment>
);

export default TextList;
