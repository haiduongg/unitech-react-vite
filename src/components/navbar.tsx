import { FaChevronDown } from 'react-icons/fa';
import { Button } from '@components/ui/Button';
import { Routes } from '@constants/routes';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='h-[55px] bg-[#F9F9F9] flex items-center'>
			<div className='container'>
				<ul className='flex items-center justify-start gap-10'>
					{Routes.map((_, idx) => (
						<li key={idx} className='group relative'>
							<Button
								className='flex items-center justify-start gap-2 text-[15px] p-0'
								variant={'ghost'}
							>
								{_.name}
								<FaChevronDown color='black' size={10} className='group-hover:rotate-180 duration-200 transition' />
							</Button>
							<ul className='hidden group-hover:block absolute left-0 top-[90%] px-3 py-1 rounded-xl shadow-lg bg-white border z-20'>
								{_.links?.map((child, index) => (
									<li key={index} className='my-3 whitespace-nowrap hover:bg-slate-100 py-2 pl-2 pr-6 rounded-md'>
										<Link to={child.path} className='py-2 pl-2 pr-6 text-sm'>{child.name}</Link>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
