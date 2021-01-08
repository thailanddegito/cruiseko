import React from 'react';
import ShowWidget1 from './ShowWidget1'
import ShowWidget2 from './ShowWidget2'
import ShowWidget3 from './ShowWidget3'
import ShowWidget4 from './ShowWidget4'
import ShowWidget5 from './ShowWidget5'
import ShowWidget6 from './ShowWidget6'

const MainWidget = (props) => {
  const {data = []} = props;

  return (
    <>
      {
        data.map((val, index) => {
          if(val.widget_type == 1) return <ShowWidget1 data={val} />
          else if(val.widget_type == 2) return <ShowWidget2 data={val} />
          else if(val.widget_type == 3) return <ShowWidget3 data={val} />
          else if(val.widget_type == 4) return <ShowWidget4 data={val} />
          else if(val.widget_type == 5) return <ShowWidget5 data={val} />
          else if(val.widget_type == 6) return <ShowWidget6 data={val} />
        })
      }
    </>
  )
}

export default MainWidget