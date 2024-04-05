import { Link } from 'react-router-dom';

import { Routes } from '@constants/routes';
import { Button } from '@components/ui/Button';
import { FaChevronRight } from 'react-icons/fa';

interface ICategoryMenu {
	title: string,
	menus?: { name: string, path: string }[]
}

export default function CategoryMenu({ title }: ICategoryMenu) {
	return (
		<>
			<h2 className='font-semibold text-[18px]'>{title}</h2>
			<ul className='mt-4'>
				{Routes.map((_, index) => (
					<li key={index} className='mb-3' title={_.name}>
						<Link to={_.path || ''} className='font-OpenSans text-sm underline text-primary-600'>
							{_.name}
						</Link>
					</li>
				))}
			</ul>
			<Button className='mt-12 text-white text-[15px] h-12 px-[16px] py-[12.5px]'>
				More Categories
				<FaChevronRight size={12} />
			</Button>
		</>
	);
}
