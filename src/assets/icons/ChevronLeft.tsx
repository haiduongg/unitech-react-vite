function ChevronLeft({
	color,
	size,
}: {
	color?: string;
	size?: string;
}) {
	return (
		<svg
			width={size || '16'}
			height={size || '16'}
			viewBox={`0 0 ${size || '16'} ${size || '16'}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M18.9332 9.62671L13.4532 15.1067C13.2048 15.3565 13.0654 15.6945 13.0654 16.0467C13.0654 16.399 13.2048 16.7369 13.4532 16.9867L18.7865 22.32'
				stroke={color || 'black'}
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='bevel'
			/>
		</svg>
	);
}

export { ChevronLeft }