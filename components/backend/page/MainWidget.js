import React from 'react';
import Widget1 from './Widget1'
import Widget2 from './Widget2'
import Widget3 from './Widget3'
import Widget4 from './Widget4'
import Widget5 from './Widget5'
import Widget6 from './Widget6'

const MainWidget = (props) => {
  const {widget_type} = props;

  return (
    <>
      {widget_type == 1 && <Widget1 />}
      {widget_type == 2 && <Widget2 />}
      {widget_type == 3 && <Widget3 />}
      {widget_type == 4 && <Widget4 />}
      {widget_type == 5 && <Widget5 />}
      {widget_type == 6 && <Widget6 />}

    </>
  )
}

export default MainWidget