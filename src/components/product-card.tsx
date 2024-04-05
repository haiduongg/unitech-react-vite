import { Button } from '@components/ui/Button';
import { VNDCurrencyFormat } from '@ultils/vnd-currency-format';
import { Link } from 'react-router-dom';

interface IProduct {
	image: string;
	name: string;
	desc: string;
	price: string;
	path: string;
}

export default function ProductCard({ product }: { product: IProduct }) {
	return (
		<div className='border rounded-xl p-4 hover:shadow-md transition duration-200 w-fit'>
			<Link to={product.path}>
				<img
					src={product.image}
					alt=''
					width={237}
					height={180}
					className='rounded-md w-[237px] h-[180px] object-cover'
				/>
			</Link>
			<div className='mt-4'>
				<Link to={product.path}>
					<p className='text-base font-medium hover:text-primary duration-200 transition'>{product.name}</p>
				</Link>
				<p className='text-xs font-OpenSans'>{product.desc}</p>
				<div className='flex items-center justify-between mt-[21px]'>
					<p className='text-md font-semibold'>
						{VNDCurrencyFormat(+product.price)}
					</p>
					<Button size={'sm'} className='text-white'>
						Buy now
					</Button>
				</div>
			</div>
		</div>
	);
}
