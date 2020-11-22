import React from 'react';

const EditorData = (props) => {
  const {name, data} = props;

  return (
    data ? (
      <>
        <h2>{name}</h2>
        <div className="show-editor ck ck-content" dangerouslySetInnerHTML={{ __html: ((!data ||data == 'undefined') ? '' :data) }} />
      </>
    ) : null
  )
}
export default EditorData