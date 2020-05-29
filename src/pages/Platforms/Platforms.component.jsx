import React, {Fragment, useContext} from 'react';
import {PlatformsContext} from './../../context/PlatformsContext';
import {Link} from 'react-router-dom';
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";

const Platforms = () => {
  const {doneFetchPlatforms, platforms} = useContext(PlatformsContext);
  return ( 
    <Fragment>
      <ul>
        {doneFetchPlatforms && platforms ? 
          platforms.map(item => (
          <li key={item.id}>{item.name}
            <Link to={`/platforms/${item.id}`}>Detail</Link>
          </li>
          ))
          : <ProgressBar /> 
          } 
      </ul>
    </Fragment>
  );
}
 
export default Platforms;
