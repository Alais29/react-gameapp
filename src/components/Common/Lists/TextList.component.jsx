import React, { Fragment } from "react";
import Subtitle from "./../Subtitle/Subtitle.component";
import "./Lists.styles.scss";

const TextList = ({ title, items, platforms }) => (
  <Fragment>
    <Subtitle text={title} />
    <ul className="list">
      {items
        ? items.map((item) => (
            <li className="list__item" key={item.id}>
              {item.name}
            </li>
          ))
        : platforms
        ? platforms.map((item) => (
            <li className="list__item" key={item.platform.id}>
              {item.platform.name}
            </li>
          ))
        : null}
    </ul>
  </Fragment>
);

export default TextList;
