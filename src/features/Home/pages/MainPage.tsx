import CustomerReviews from '@features/Home/components/customer-review';
import ProductVerticalList from '@components/product-vertical-list';
import OurBlogPosts from '@features/Home/components/blog-posts';
import Banner from '@features/Home/components/home-banner';
import DocumentTitle from '@components/document-title';
import productApi, { IProduct } from '@api/productApi';
import CategoryMenu from '@components/category-menu';
import { FaChevronRight } from 'react-icons/fa';
import { Button } from '@components/ui/Button';
import { useEffect, useState } from 'react';

export default function MainPage() {
	const [productList, setProductList] = useState<IProduct[] | null>(null);

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
				<div className='container py-16'>
					<div className="flex items-center justify-between">
						<h3 className="text-md font-semibold">Trending Products</h3>
						<Button size={"sm"} variant={'outline'}>See more <FaChevronRight size={10} color="black" /></Button>
					</div>
					<div className="mt-8">
						<ProductVerticalList productList={productList} cols='4' items={4} />
					</div>
				</div>
				<div className='container py-16'>
					<OurBlogPosts />
				</div>
			</div>
		</>
	);
}
