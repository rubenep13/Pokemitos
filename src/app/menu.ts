interface MenuItem {
  name: string,
  icon: string,
  href: string,
}

export const menuItems: MenuItem[] = [
  {
    name: 'Pokedex',
    icon: 'book',
    href: 'pokedex'
  },
  {
    name: 'Team creator',
    icon: 'book',
    href: 'team'
  },
  {
    name: 'Combats',
    icon: 'book',
    href: 'combats'
  },
];
