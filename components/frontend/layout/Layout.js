import Head from 'next/head';
import React from 'react';
import Header from './Header';
// import Footer from '../layout/Footer'
// import Loading from '../Loading'

const Layout = (props) => {
  const {title, loading, children} = props;

  return (
    <>
      <Head>
        <title>{title ? title : 'Home'}</title>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" type="image/x-icon" href="icon/logo.svg" />
        <link rel="apple-touch-icon" type="image/x-icon" href="icon/logo.svg" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

        <link href="template/css/bootstrap.min.css" rel="stylesheet" />
        <link href="template/css/style.css" rel="stylesheet" />
        <link href="template/css/vendors.css" rel="stylesheet" />
        <link href="css/custom.css" rel="stylesheet" />

        <script src="template/js/common_scripts.js"></script>
        <script src="template/js/main.js"></script>
        <script src="template/JS/validate.js"></script>
      </Head>
      
      <Header />
      <div className='main-layout'>
        {/* {loading && <Loading />} */}
        {children}
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Layout