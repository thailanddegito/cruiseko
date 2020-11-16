import React from 'react';

const Description = (props) => {
  const {packages} = props;

  return (
    packages ? (
      <>
        <h2>Description</h2>
        <div className="show-editor ck ck-content" dangerouslySetInnerHTML={{ __html: ((!packages.description || packages.description == 'undefined') ? '' : packages.description) }} />
      </>
    ) : null
  )
}
export default Description