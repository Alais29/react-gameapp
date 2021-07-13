import React, {Fragment} from 'react';
import Subtitle from './../Subtitle/Subtitle.component';
import "./Lists.styles.scss";

const StoreList = ({stores}) => (
  <Fragment>
    <Subtitle text="Get it here" />
    <ul className="list list--mt">
      {stores.map((store) => (
        <li className="list__item" key={store.id}>
          <a
            href={`https://${store.store.domain}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require(`./../../../assets/images/${store.store.slug}.png`)}
              alt={store.name}
              className="list__store-logo"
            />
          </a>
        </li>
      ))}
    </ul>
  </Fragment>
)
 
export default StoreList;
