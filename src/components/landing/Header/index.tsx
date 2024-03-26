import { Link } from 'react-router-dom';

import { Button } from '@components/ui/Button';

import SearchBar from './search-bar';

export default function Header() {
	return (
		<div className='container'>
			<div className='text-xs h-12 border-b font-OpenSans font-normal flex items-center justify-between'>
				<div className='flex items-center justify-start gap-[33px]'>
					<Button variant={'link'} className='decoration-primary-500 p-0 text-xs'>
						<Link to={'/'} className='text-primary-500'>
							Chat with us
						</Link>
					</Button>
					<p>+84 862 248 332</p>
					<p>caohaiduong04@gmail.com</p>
				</div>

				<div className='text-primary-500 flex items-center justify-end gap-[38px]'>
					<Button variant={'link'} className='decoration-primary-500 p-0 text-xs'>
						<Link to={'/'} className='text-primary-500'>
							Blog
						</Link>
					</Button>
					<Button variant={'link'} className='decoration-primary-500 p-0 text-xs'>
						<Link to={'/'} className='text-primary-500'>
							About Us
						</Link>
					</Button>
					<Button variant={'link'} className='decoration-primary-500 p-0 text-xs'>
						<Link to={'/'} className='text-primary-500'>
							Carrers
						</Link>
					</Button>
				</div>
			</div>

			<SearchBar />
		</div>
	);
}
