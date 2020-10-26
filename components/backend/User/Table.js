
import React from 'react';
import Link from 'next/link'

const Table = (props) => {

  return (
    <>
      <div class="card mb-3">
        <div class="card-header">
          <i class="fa fa-table"></i> Table Users
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Start date</th>
                  <th className="text-center">Manage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>2011/04/25</td>
                  <td className="text-center">
                    <ul class="buttons manage">
                      <li>
                        <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/1`}>
                          <a class="btn_1 gray manage"><i class="fa fa-fw fa-check-circle-o"></i> Manage</a>
                        </Link>
                      </li>
                      <li><a href="#0" class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> Delete</a></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>2011/07/25</td>
                  <td className="text-center">
                    <ul class="buttons manage">
                      <li>
                        <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/1`}>
                          <a class="btn_1 gray manage"><i class="fa fa-fw fa-check-circle-o"></i> Manage</a>
                        </Link>
                      </li>
                      <li><a href="#0" class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> Delete</a></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>2009/01/12</td>
                  <td className="text-center">
                    <ul class="buttons manage">
                      <li>
                        <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/1`}>
                          <a class="btn_1 gray manage"><i class="fa fa-fw fa-check-circle-o"></i> Manage</a>
                        </Link>
                      </li>
                      <li><a href="#0" class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> Delete</a></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>2012/03/29</td>
                  <td className="text-center">
                    <ul class="buttons manage">
                      <li>
                        <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/1`}>
                          <a class="btn_1 gray manage"><i class="fa fa-fw fa-check-circle-o"></i> Manage</a>
                        </Link>
                      </li>
                      <li><a href="#0" class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> Delete</a></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>2008/11/28</td>
                  <td className="text-center">
                    <ul class="buttons manage">
                      <li>
                        <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/1`}>
                          <a class="btn_1 gray manage"><i class="fa fa-fw fa-check-circle-o"></i> Manage</a>
                        </Link>
                      </li>
                      <li><a href="#0" class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> Delete</a></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Brielle Williamson</td>
                  <td>Integration Specialist</td>
                  <td>New York</td>
                  <td>2012/12/02</td>
                  <td className="text-center">
                    <ul class="buttons manage">
                      <li>
                        <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/1`}>
                          <a class="btn_1 gray manage"><i class="fa fa-fw fa-check-circle-o"></i> Manage</a>
                        </Link>
                      </li>
                      <li><a href="#0" class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> Delete</a></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Herrod Chandler</td>
                  <td>Sales Assistant</td>
                  <td>San Francisco</td>
                  <td>2012/08/06</td>
                  <td className="text-center">
                    <ul class="buttons manage">
                      <li>
                        <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/1`}>
                          <a class="btn_1 gray manage"><i class="fa fa-fw fa-check-circle-o"></i> Manage</a>
                        </Link>
                      </li>
                      <li><a href="#0" class="btn_1 gray delete"><i class="fa fa-fw fa-times-circle-o"></i> Delete</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default Table