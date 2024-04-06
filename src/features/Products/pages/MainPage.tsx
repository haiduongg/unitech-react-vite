// import FilterAction from '@components/landing/FilterAction';
import PropertyFilter from '@components/PropertyFilter';
import Breadcrumbs from '@components/ui/Breadcrumbs';
import { Button } from '@components/ui/Button';
import { VscListFlat } from 'react-icons/vsc';
import Navbar from '@components/navbar';
import { RxGrid } from 'react-icons/rx';
import { useState } from 'react';

export default function MainPage() {
	const [viewMode, setViewMode] = useState('grid');
	return (
		<div className='page'>
			<Navbar />
			<Breadcrumbs />
			<div className='container my-2 flex items-center justify-between'>
				<h1 className='text-2xl'>Fruit and Vegetables</h1>
				<div className='flex items-center justify-start gap-6 text-xs'>
					<div
						className={`flex items-center justify-start gap-1 cursor-pointer ${viewMode === 'grid' ? '' : 'opacity-50'
							}`}
						onClick={() => setViewMode('grid')}
					>
						<RxGrid size={16} />
						<p>Grid view</p>
					</div>
					<div
						className={`flex items-center justify-start gap-1 cursor-pointer ${viewMode === 'list' ? '' : 'opacity-50'
							}`}
						onClick={() => setViewMode('list')}
					>
						<VscListFlat size={16} />
						<p>List view</p>
					</div>
					<div className='flex items-center justify-start gap-1'>
						<Button className='font-semibold px-2 py-0 bg-primary-50 h-fit shadow-none'>
							<p className='text-primary-700'>117</p>
						</Button>
						<p>Products</p>
					</div>
				</div>
			</div>
			{/* <FilterAction /> */}
			<div className='container py-16 grid grid-cols-12 gap-8'>
				<div className='col-span-3'>
					<PropertyFilter />
				</div>
				<div className='col-span-9'>

				</div>
			</div>
		</div>
	);
}
