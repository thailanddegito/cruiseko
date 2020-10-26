
import React from 'react';
import Link from 'next/link'

const Card = (props) => {
  const {name} = props;
  return (
    <>
      <div className="col-xl-4 col-sm-6 mb-3">
        <div className="card dashboard text-white bg-primary o-hidden h-100">
          <div className="card-body">
            <div className="card-body-icon img">
              <img src="/template/img/no-picture.png" className="approve-logo" />
            </div>
            <div className="mr-5"><h5>{`ชื่อธุรกิจนำเที่ยวภาษาไทย`}</h5></div>
            <div className="mr-5"><p className="mb-0">{`ชื่อธุรกิจนำเที่ยวภาษาอังกฤษ`}</p></div>
            <div className="mr-5"><p className="mb-0 font-14">{`ประเภทธุรกิจ`}</p></div>
            <div className="mr-5"><h5>{`เลขที่ใบอนุญาต`}</h5></div>

          </div>
          <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/1`}>
            <a className="card-footer text-white clearfix small z-1">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Card