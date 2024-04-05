import DefaultImageCustomer from '@assets/images/default-image-customer.jpg';

export default function CustomerReviewCard() {
	return (
		<div className='relative w-full rounded-xl px-8 pt-6 pb-10 border flex items-center justify-center flex-col select-none cursor-pointer hover:shadow-sm duration-200 transition-shadow'>
			<p className='max-w-[85%] max-h-[92px] text-sm font-medium text-center line-clamp-4'>
				“ This is an super space for your customers qoute. Don’t worry it works
				smooth as pie. You will get all what you need by writiing a text here“
			</p>
			<p className='mt-6 text-xs font-semibold opacity-30'>Name and Surname</p>
			<img
				src={DefaultImageCustomer}
				alt='image-customer'
				width={48}
				height={48}
				className='absolute w-12 h-12 rounded-full bottom-[-24px]'
			/>
		</div>
	);
}
