import { Button } from '@components/ui/Button';
import { Routes } from '@constants/routes';
import { Link } from 'react-router-dom';

export default function CategoryMenu() {
	return (
		<div className='h-[410px]'>
			<div className='container py-16 grid grid-cols-12 gap-8'>
				<div className='col-span-3'>
					<h2 className='font-semibold text-[18px]'>Category menu</h2>
					<ul className='mt-4'>
						{Routes.map((_, index) => (
							<li key={index} className='mb-3'>
								<Button variant={'link'} className='p-0 h-fit'>
									<Link to={_.path || ''} className='font-OpenSans text-sm'>{_.name}</Link>
								</Button>
							</li>
						))}
					</ul>
					<Button className='mt-12'>More Categories</Button>
				</div>
				<div className='col-span-9'></div>
			</div>
		</div>
	);
}
