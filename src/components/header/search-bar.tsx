import { User, Search, ChevronDown, Cart } from '@assets/icons';
import { Input } from '@components/ui/Input';
import { Link } from 'react-router-dom';

export default function SearchBar() {
	return (
		<div className='h-[130px] flex items-center justify-between'>
			<Link to={'/'} className='hover:opacity-70 transition-opacity duration-200'>
				<h1 className='text-3xl font-extrabold'>UniTech</h1>
			</Link>
			<div className='w-[500px] h-[42px] px-4 pt-[10px] pb-[9px] border-2 rounded-lg flex items-center justify-between'>
				<button className='w-[130px] h-[23px] flex items-center justify-between'>
					<p className='font-bold text-[15px]'>All Categories</p>
					<div className='size-4 grid place-items-center'>
						<ChevronDown color='black' />
					</div>
				</button>
				<div className='w-[2px] h-5 bg-[#e5e7eb]'></div>
				<div className='w-[290px] flex items-center justify-between'>
					<Input
						className='border-none font-OpenSans text-sm focus-visible:ring-0'
						placeholder='Search Products, categories ...'
					/>
					<button className='w-4 h-4'>
						<Search />
					</button>
				</div>
			</div>
			<div className='flex items-center justify-end gap-10'>
				<User />
				<Cart />
			</div>
		</div>
	);
}
