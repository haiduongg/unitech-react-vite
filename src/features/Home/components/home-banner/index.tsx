import iPhone15ProMax from '@assets/images/home-banner/iphone-15-promax.jpg';
import laptop from '@assets/images/home-banner/laptop.jpg';

import BannerCard from "./banner-card";

export default function Banner() {
	return (
		<div className='flex items-start justify-between w-full z-10'>
			<BannerCard category="Mobile" name="iPhone 15 Pro Max" path="/products/mobile/iphone-15-pro-max" image={iPhone15ProMax} />
			<BannerCard category="Laptop" name="Asus TUF Gaming F15" path="/products/laptop/asus-tuf-gaming-f15" image={laptop} />
		</div>
	);
}