import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import productApi from '@api/productApi';

import Header from '@components/header';
import Navbar from '@components/navbar';

import DocumentTitle from '@components/document-title';
import CategoryMenu from '@components/category-menu';
import Banner from './components/banner';
import ProductVerticalList from '@components/product-vertical-list';
import CustomerReviews from '@features/Home/components/customer-review';
import Footer from '@components/footer';

export default function Home() {
	const [productList, setProductList] = useState<AxiosResponse | null | void>(
		null
	);

	useEffect(() => {
		const fetchProductList = async () => {
			try {
				const params = {};
				const response = await productApi.getAll(params);
				console.log(response.data);
				setProductList(response.data);
			} catch (error) {
				console.log('Failed to fetch product list', error);
			}
		};

		fetchProductList();
	}, []);

	return (
		<>
			<DocumentTitle title='Home page' />
			<div>
				<Header />
				<div className='mt-10'>
					<Navbar />
				</div>
				<div className='container py-16 flex items-start justify-start gap-8'>
					<div className='w-[269px]'>
						<CategoryMenu title='Category Menu' />
					</div>
					<div className='w-[calc(100%-269px)] flex items-center justify-between'>
						<Banner />
					</div>
				</div>
				<div className='container py-16 flex items-start justify-start gap-8'>
					<div className='w-[269px]'>
						<CategoryMenu title='Best selling products' />
					</div>
					<div className='w-[calc(100%-269px)]'>
						<ProductVerticalList productList={productList} cols='3' items={3} />
					</div>
				</div>
				<div className='container py-16 flex items-start justify-start gap-8'>
					<div className='w-[269px]'>
						<CategoryMenu title='Best from Farmers' />
					</div>
					<div className='w-[calc(100%-269px)]'>
						<ProductVerticalList productList={productList} cols='3' items={3} />
					</div>
				</div>
				<div className='py-16'>
					<CustomerReviews />
				</div>
				{/* <div className='container py-16'>
					<TrendingProducts />
				</div> */}
				{/* <div className='container py-16'>
					<OurBlogPosts />
				</div> */}
				<div><Footer /></div>
			</div>
		</>
	);
}
