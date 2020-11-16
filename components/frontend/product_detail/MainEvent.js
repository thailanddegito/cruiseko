
import React from 'react';
import Event from './Event'

const MainEvent = (props) => {
  const {error} = props;

  return (
    <>
      <h3>Program <small>(60 minutes)</small></h3>
      <p>
        Iudico omnesque vis at, ius an laboramus adversarium. An eirmod doctus admodum est, vero numquam et mel, an duo modo error. No affert timeam mea, legimus ceteros his in. Aperiri honestatis sit at. Eos aeque fuisset ei, case denique eam ne. Augue invidunt has ad, ullum debitis mea ei, ne aliquip dignissim nec.
      </p>
      <ul className="cbp_tmtimeline">
        <Event number={"1"} data={""} />
        <Event number={"2"} data={""} />
      </ul>
    </>
  )
}
export default MainEvent