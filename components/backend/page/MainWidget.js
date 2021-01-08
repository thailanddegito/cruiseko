import React from 'react';
import Widget1 from './Widget1'
import Widget2 from './Widget2'
import Widget3 from './Widget3'
import Widget4 from './Widget4'
import Widget5 from './Widget5'
import Widget6 from './Widget6'

const MainWidget = (props) => {
  const {widget_type, data = null} = props;

  return (
    <>
      {widget_type == 1 && <Widget1 data={data} />}
      {widget_type == 2 && <Widget2 data={data} />}
      {widget_type == 3 && <Widget3 data={data} />}
      {widget_type == 4 && <Widget4 data={data} />}
      {widget_type == 5 && <Widget5 data={data} />}
      {widget_type == 6 && <Widget6 data={data} />}

    </>
  )
}

export default MainWidget