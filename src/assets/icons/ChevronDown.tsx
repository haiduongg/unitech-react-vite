export function ChevronDown({ color }: { color?: string }) {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4.81348 6.53336L7.55348 9.27336C7.67838 9.39752 7.84735 9.46722 8.02348 9.46722C8.1996 9.46722 8.36857 9.39752 8.49348 9.27336L11.1601 6.60669'
				stroke={color}
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='bevel'
			/>
		</svg>
	);
}