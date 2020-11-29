import React, { useEffect, useState } from 'react';
import Layout from '../../components/frontend/layout/Layout';
import Banner from '../../components/frontend/product_detail/Banner';
import MainDetail from '../../components/frontend/product_detail/MainDetail';
import Router, {useRouter } from 'next/router';
import api from '../../utils/api';

const ProductDetail = ({query}) => {
  const [loading, setLodding] = useState(false);
  const [packages, setPackage] = useState();

	const router = useRouter();
	const id = router.query.id;
	

	const fecthPackageOne = () => {
		setLodding(true);
		api.getPackageOne(id)
    .then(res=>{
      const data = res.data;
      setPackage(data);
      setLodding(false);
    })
    .catch(err => {
      setLodding(false);
      console.log(err.response);
    })
	}

	
  useEffect(() => {
    fecthPackageOne();
  }, [])
  
	
	console.log(packages);
  
  return (
    <Layout loading={loading} title="Product Details" page={'product_details'}>
			<aside className="main-content">
				<main>
					<div>
						<Banner packages={packages} />
					</div>
					<div>
						<MainDetail packages={packages} />
					</div>
				</main>
			</aside>
      <div className="end-content"></div>
    </Layout>
  )
}

ProductDetail.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default ProductDetail
