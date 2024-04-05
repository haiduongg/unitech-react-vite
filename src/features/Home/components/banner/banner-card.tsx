import { Button } from '@components/ui/Button';
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function BannerCard({ category, name, path, image }: { category: string, name: string, path: string, image: string }) {
	return (
		<div className='group relative w-[420px] p-8 border rounded-xl h-full hover:shadow-lg transition duration-200' title={name}>
			<img src={image} alt={name} className='absolute top-0 left-0 h-full w-full rounded-xl -z-20 blur-sm group-hover:blur-none duration-200 transition' />
			<div className='absolute top-0 left-0 bg-black w-full h-full rounded-xl -z-10 opacity-50'></div>
			<div className='text-white'>
				<p className='text-xs font-semibold mt-4'>{category}</p>
				<p className='mt-2 font-semibold text-lg'>{name}</p>
				<Button className='mt-24 border-2' variant={'outline'}>
					<Link to={path} className='flex items-center justify-start gap-2'>
						Read recepies
						<FaChevronRight size={10} />
					</Link>
				</Button>
			</div>
		</div>
	);
}
