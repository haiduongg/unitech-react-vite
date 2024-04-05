import { ReactNode, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';

interface SliderProps {
	children: ReactNode;
}

export default function Slider({ children }: SliderProps) {
	const [position, setPosition] = useState(0);
	const handleButton = (action: string) => {
		const imgWidth = (1260 / 3) + 32;
		(action == 'previous') ? setPosition(position + imgWidth) : setPosition(position - imgWidth);
	};

	return (
		<div className='relative'>
			<button
				className='absolute top-[50%] left-[-20px] translate-y-[-50%] py-3 rounded-tr-2xl rounded-br-2xl bg-black z-10'
				onClick={() => handleButton('previous')}
			>
				<div className='p-2'>
					<FaChevronLeft size={16} color='white' />
				</div>
			</button>
			<button
				className='absolute top-[50%] right-[-20px] translate-y-[-50%] py-3 rounded-tr-2xl rounded-br-2xl bg-black overflow-hidden backdrop-opacity-70 z-10'
				onClick={() => handleButton('next')}
			>
				<div className='p-2'>
					<FaChevronRight size={16} color='white' />
				</div>
			</button>

			<div className='mx-auto h-[220px] overflow-hidden'>
				<div className={`h-[220px] ml-[${position}px]`}>{children}</div>
			</div>
		</div>
	);
}
