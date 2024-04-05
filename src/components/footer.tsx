import { Button } from '@components/ui/Button';
import { FooterRoutes } from '@constants/FooterRoutes';

export default function Footer() {
	return (
		<div className='py-16 pb-8 border-t container'>
			<div className='grid grid-cols-4 place-items-start'>
				{FooterRoutes?.map((_, index) => (
					<div key={index}>
						<p className='text-md font-semibold'>{_.name}</p>
						<ul className='mt-4'>
							{_.links?.map((child, index) => (
								<li key={index} className='mt-4'>
									<Button variant={'link'} className='text-[0.875rem] font-normal p-0 font-OpenSans h-6'>{child.name}</Button>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className='mt-12'>
				<p className='font-semibold text-md'>Products tags</p>
				<div className='mt-4 flex flex-wrap gap-4 items-center justify-start'>
					<div className='w-[58px] h-[26px] bg-primary-50 rounded-full flex items-center justify-center text-xs font-semibold'>
						<p>Beans</p>
					</div>
					<div className='w-[58px] h-[26px] bg-primary-50 rounded-full flex items-center justify-center text-xs font-semibold'>
						<p>Carrots</p>
					</div>
					<div className='w-[58px] h-[26px] bg-primary-50 rounded-full flex items-center justify-center text-xs font-semibold'>
						<p>Garlic</p>
					</div>
					<div className='py-1 px-3 bg-primary-50 rounded-full flex items-center justify-center text-xs font-semibold'>
						<p>Mushrooms</p>
					</div>
				</div>
			</div>
		</div>
	);
}
