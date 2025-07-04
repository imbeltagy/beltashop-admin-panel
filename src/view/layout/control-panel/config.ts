import { paths } from '@/lib/config/paths';
import { NavbarIcons } from '@/lib/config/icons';
import { NavSection } from '@/lib/types/navigation';

export const configNavigation: NavSection[] = [
  {
    items: [
      {
        path: paths.root,
        label: 'home',
        icon: NavbarIcons.HOME,
      },
    ],
  },
  {
    heading: 'products_section',
    items: [
      {
        path: paths.products.categories.list,
        label: 'categories',
        icon: NavbarIcons.CATEGORY,
      },
      {
        path: paths.products.subCategories.list,
        label: 'sub_categories',
        icon: NavbarIcons.SUBCATEGORY,
      },
      {
        path: paths.products.brands.list,
        label: 'brands',
        icon: NavbarIcons.BRAND,
      },
      {
        path: paths.products.products.list,
        label: 'products',
        icon: NavbarIcons.INVENTORY,
      },
      {
        path: paths.products.offers.list,
        label: 'offers',
        icon: NavbarIcons.PERCENT,
      },
      {
        path: paths.products.tags.list,
        label: 'tags',
        icon: NavbarIcons.SELL,
      },
      {
        path: paths.products.labels.list,
        label: 'labels',
        icon: NavbarIcons.LABEL,
      },
    ],
  },
];
