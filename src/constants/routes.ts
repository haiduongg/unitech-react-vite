const Routes: {
  name: string;
  path?: string;
  links?: { name: string; path: string }[];
}[] = [
  {
    name: 'Mobile Phone',
    path: '/products/mobile-phone',
    links: [
      { name: 'Apple (iphone)', path: '/products/mobile-phone/apple-iphone' },
      { name: 'Xiaomi', path: '/products/mobile-phone/xiaomi' },
      { name: 'Oppo', path: '/products/mobile-phone/oppo' },
      { name: 'Samsung', path: '/products/mobile-phone/samsung' },
      { name: 'Realme', path: '/products/mobile-phone/realme' },
    ],
  },
  {
    name: 'Laptop',
    path: '/products/laptop',
    links: [
      { name: 'Apple (macbook)', path: '/products/laptop/apple-macbook' },
      { name: 'Asus', path: '/products/laptop/asus' },
      { name: 'Acer', path: '/products/laptop/acer' },
      { name: 'Lenovo', path: '/products/laptop/lenovo' },
      { name: 'Dell', path: '/products/laptop/dell' },
    ],
  },
  {
    name: 'PC',
    path: '/products/pc',
    links: [
      { name: 'PC', path: '/products/pc' },
      { name: 'Components', path: '/products/components' },
    ],
  },
  {
    name: 'Accessory',
    path: '/products/accessory',
    links: [
      { name: 'Router', path: '/products/accessory/router' },
      { name: 'SSD', path: '/products/accessory/ssd' },
      { name: 'USB', path: '/products/accessory/usb' },
    ],
  },
];

export { Routes };
