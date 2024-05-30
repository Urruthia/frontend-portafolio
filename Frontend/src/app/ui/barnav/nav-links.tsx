
import {
  ChatBubbleBottomCenterIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Sobre Mi', href: '/principal', icon: 	UserCircleIcon },
  {
    name: 'Blog',
    href: '/principal/blog',
    icon: ChatBubbleBottomCenterIcon,
  },
 
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'text-gray-400 hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium',
              {
                'bg-violet-400 text-xl font-bold text-gray-800 ': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
