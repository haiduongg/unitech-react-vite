import { Button } from '@components/ui/Button';
import { FaChevronRight } from 'react-icons/fa';
import Image from '@assets/default-image-customer.jpg';

export default function OurBlogPosts() {
	return (
		<div>
			<div className='flex items-center justify-between'>
				<h3 className='text-md font-semibold'>Read our Blog posts</h3>
				<Button size={'sm'} variant={'outline'}>
					See more <FaChevronRight size={10} color='black' />
				</Button>
			</div>
			<div className='mt-8 grid grid-cols-12 gap-8'>
				<div className='col-span-5 p-6 border rounded-xl'>
					<div className='px-2 bg-primary-50 rounded-xl w-fit'>
						<p className='text-xs font-semibold text-primary-800'>
							Dinner tips
						</p>
					</div>
					<div className='mt-[14.25rem]'>
						<p className='text-lg max-w-[25rem] font-semibold'>
							Our chef tips for a great and tasty dinner ready in 20 minutes
						</p>
						<div className='mt-2 flex items-center justify-start'>
							<img
								src={Image}
								alt='image'
								width={32}
								height={32}
								className='w-8 h-8 object-cover rounded-full'
							/>
							<p className='font-OpenSans text-xs font-normal ml-2'>Author</p>
							<p className='font-OpenSans text-xs font-normal ml-4'>
								17.6.2020
							</p>
						</div>
					</div>
				</div>
				<div className='col-span-3'>
					<div>
						<div className='border w-[269px] h-[180px] rounded-xl' />
						<div className='mt-6'>
							<div className='px-2 bg-primary-50 rounded-xl w-fit'>
								<p className='text-xs font-semibold text-primary-800'>
									Vegetable
								</p>
							</div>
							<p className='mt-2 font-semibold text-md'>
								Which vegetable your family will love and want’s eat each day
							</p>
							<div className='flex items-center justify-start mt-4 gap-4'>
								<p className='text-xs font-OpenSans font-normal'>Author</p>
								<p className='text-xs font-OpenSans font-normal'>15.6.2020</p>
							</div>
						</div>
					</div>
				</div>
				<div className='col-span-4 flex flex-col gap-8 items-start justify-start'>
					<div className='flex items-start justify-start gap-6'>
						<div>
							<p className='font-normal text-sm max-w-[249px]'>
								Salat is kinda good start to your morning routines
							</p>
							<div className='flex items-center justify-start gap-4 mt-4'>
								<p className='text-xs font-OpenSans font-normal'>
									Author
								</p>
								<p className='text-xs font-OpenSans font-normal'>14.1.2020</p>
							</div>
						</div>
						<div className='w-24 h-24 border rounded-xl'></div>
					</div>
					<div className='flex items-start justify-start gap-6'>
						<div>
							<p className='font-normal text-sm max-w-[249px]'>
								Salat is kinda good start to your morning routines
							</p>
							<div className='flex items-center justify-start gap-4 mt-4'>
								<p className='text-xs font-OpenSans font-normal'>
									Author
								</p>
								<p className='text-xs font-OpenSans font-normal'>14.1.2020</p>
							</div>
						</div>
						<div className='w-24 h-24 border rounded-xl'></div>
					</div>
					<div className='flex items-start justify-start gap-6'>
						<div>
							<p className='font-normal text-sm max-w-[249px]'>
								Salat is kinda good start to your morning routines
							</p>
							<div className='flex items-center justify-start gap-4 mt-4'>
								<p className='text-xs font-OpenSans font-normal'>
									Author
								</p>
								<p className='text-xs font-OpenSans font-normal'>14.1.2020</p>
							</div>
						</div>
						<div className='w-24 h-24 border rounded-xl'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
