import React, {Fragment, useContext} from 'react';
import {PublishersContext} from './../../context/PublishersContext';
import {Link} from 'react-router-dom';
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";

const Publishers = () => {
  const {doneFetchPublishers, publishers} = useContext(PublishersContext);
  return ( 
    <Fragment>
      <ul>
        {doneFetchPublishers && publishers ? 
          publishers.map(item => (
          <li key={item.id}>{item.name}
            <Link to={`/publishers/${item.id}`}>Detail</Link>
          </li>
          ))
          : <ProgressBar /> 
          } 
      </ul>
    </Fragment>
  );
}
 
export default Publishers;
