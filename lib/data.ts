export type Category = 'All' | 'Starters' | 'Mains' | 'Desserts' | 'Drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  isFeatured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls infused with black truffle and parmesan, served with garlic aioli.',
    price: 12.50,
    image: 'https://picsum.photos/seed/arancini/800/600',
    category: 'Starters',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Burrata & Heirloom Tomato',
    description: 'Fresh burrata cheese with heirloom tomatoes, basil, and a balsamic reduction.',
    price: 14.00,
    image: 'https://picsum.photos/seed/burrata/800/600',
    category: 'Starters',
  },
  {
    id: '3',
    name: 'Wagyu Ribeye Steak',
    description: '8oz Wagyu ribeye cooked to perfection, served with roasted root vegetables and peppercorn sauce.',
    price: 45.00,
    image: 'https://picsum.photos/seed/steak/800/600',
    category: 'Mains',
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Pan-Seared Scallops',
    description: 'Wild-caught scallops with cauliflower purée, crispy pancetta, and herb oil.',
    price: 32.00,
    image: 'https://picsum.photos/seed/scallops/800/600',
    category: 'Mains',
  },
  {
    id: '5',
    name: 'Wild Mushroom Risotto',
    description: 'Creamy Arborio rice with wild forest mushrooms, thyme, and aged parmesan.',
    price: 24.00,
    image: 'https://picsum.photos/seed/risotto/800/600',
    category: 'Mains',
  },
  {
    id: '6',
    name: 'Dark Chocolate Fondant',
    description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.',
    price: 11.00,
    image: 'https://picsum.photos/seed/fondant/800/600',
    category: 'Desserts',
    isFeatured: true,
  },
  {
    id: '7',
    name: 'Lemon Tart',
    description: 'Classic French lemon tart with a buttery pastry shell and toasted meringue.',
    price: 9.50,
    image: 'https://picsum.photos/seed/lemontart/800/600',
    category: 'Desserts',
  },
  {
    id: '8',
    name: 'Artisan Negroni',
    description: 'A classic Italian cocktail made with premium gin, Campari, and sweet vermouth.',
    price: 14.00,
    image: 'https://picsum.photos/seed/negroni/800/600',
    category: 'Drinks',
  },
  {
    id: '9',
    name: 'Sparkling Elderflower',
    description: 'Refreshing mocktail with elderflower cordial, fresh mint, and sparkling water.',
    price: 7.00,
    image: 'https://picsum.photos/seed/elderflower/800/600',
    category: 'Drinks',
  }
];

export const getFeaturedItems = () => menuItems.filter(item => item.isFeatured);
export const getCategories = (): Category[] => ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];
export const getMenuByCategory = (category: Category) => 
  category === 'All' ? menuItems : menuItems.filter(item => item.category === category);
export const getMenuItemById = (id: string) => menuItems.find(item => item.id === id);
