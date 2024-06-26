export function User({ color }: { color?: string }) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 21.9999L3.79 19.1199C6.4 9.6199 17.6 9.6199 20.21 19.1199L21 21.9999" stroke={color || "#151515"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M12 11.98C14.7614 11.98 17 9.74141 17 6.97998C17 4.21856 14.7614 1.97998 12 1.97998C9.23858 1.97998 7 4.21856 7 6.97998C7 9.74141 9.23858 11.98 12 11.98Z" stroke={color || "#151515"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel" />
		</svg>

	);
}