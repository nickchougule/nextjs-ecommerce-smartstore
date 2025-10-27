'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Manage Products', href: '/admin' },
    { name: 'Add New Product', href: '#addProduct' },
  ];

  return (
    <div className="bg-dark text-light p-3 vh-100 position-fixed" style={{ width: '220px' }}>
      <h4 className="fw-bold mb-4 text-center text-warning">Admin Panel</h4>
      <ul className="nav flex-column">
        {links.map((link) => (
          <li className="nav-item mb-2" key={link.name}>
            <Link
              href={link.href}
              className={`nav-link text-light ${pathname === link.href ? 'active text-warning fw-bold' : ''}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <hr className="border-secondary" />
      <p className="small text-center text-muted mt-4">© {new Date().getFullYear()} SmartStore</p>
    </div>
  );
}
