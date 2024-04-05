const ChevronRight = ({ color, size }: { color?: string; size?: string }) => {
	return (
		<svg
			width={size || '16'}
			height={size || '16'}
			viewBox={`0 0 ${size || '16'} ${size || '16'}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M13.0664 22.3734L18.5464 16.8934C18.7947 16.6436 18.9341 16.3056 18.9341 15.9534C18.9341 15.6011 18.7947 15.2632 18.5464 15.0134L13.2131 9.68005'
				stroke={color || 'black'}
				stroke-width='2.5'
				stroke-linecap='round'
				stroke-linejoin='bevel'
			/>
		</svg>
	);
};

export { ChevronRight };
