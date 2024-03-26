import { Routes } from '@constants/routes';
import ChevronDown from '@assets/svg/ChevronDown.svg';
import { Button } from '@components/ui/Button';

export default function Navbar() {
	return (
		<div className='h-[55px] bg-primary-50 flex items-center'>
			<div className='container'>
				<ul className='flex items-center justify-start gap-10'>
					{Routes.map((_, index) => (
						<li key={index}>
							<Button className='flex items-center justify-start text-[15px] p-0' variant={'ghost'}>
								{_.name}
								<img src={ChevronDown} alt="chevron-down" className='w-[12px] h-[12px] ml-[2px]' />
							</Button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}