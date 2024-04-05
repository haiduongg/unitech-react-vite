import CustomerReviewCard from '@features/Home/components/customer-review/customer-review-card';
import { FaChevronRight } from 'react-icons/fa';
import { Button } from '@components/ui/Button';
import Slider from '@components/slider';

export default function CustomerReviews() {
	return (
		<div className=''>
			<div className='container flex items-center justify-between'>
				<h3 className='text-md font-semibold'>Our customers says</h3>
				<Button size={'sm'} variant={'outline'}>
					See more <FaChevronRight size={10} color='black' />
				</Button>
			</div>
			<div className='mt-8 max-w-[1260px] mx-auto'>
				<Slider>
					{/* TODO: Update scroll for slide */}
					<div className='flex'>
						{Array(3).fill(0).map((_, idx) => (
							<div key={idx} className='w-[calc(1260px/3)] ml-8 first:ml-0'>
								<CustomerReviewCard />
							</div>
						))}
					</div>
				</Slider>
			</div>
		</div>
	);
}
