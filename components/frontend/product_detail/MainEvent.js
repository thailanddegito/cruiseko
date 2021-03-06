
import React from 'react';
import Event from './Event'
import EditorData from './EditorData';

const MainEvent = (props) => {
  const {packages} = props;

  console.log(packages);

  return (
    <>
      <EditorData name="Events" data={packages?.event_description} />
      {
        packages?.events ? (
          <ul className="cbp_tmtimeline">
            {
               packages.events.map((val, index) => (
                <Event number={index+1} data={val} key={index} />
               ))
            }
          </ul>
        ) : null
      }
      
    </>
  )
}
export default MainEvent