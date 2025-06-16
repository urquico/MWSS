import { Breadcrumbs } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { sidebarModules } from '@/lib/data/sidebar-links';

type SidebarLink = {
  label: string;
  path?: string;
  links?: SidebarLink[];
};

function findBreadcrumbTrail(modules: SidebarLink[], pathname: string): string[] {
  for (const module of modules) {
    if (module.path && pathname === module.path) {
      return [module.label];
    }
    if (module.links) {
      for (const link of module.links) {
        if (link.path && pathname === link.path) {
          return [module.label, link.label];
        }
        if (link.links) {
          for (const sublink of link.links) {
            if (sublink.path && pathname === sublink.path) {
              return [module.label, link.label, sublink.label];
            }
          }
        }
      }
    }
  }
  return [];
}

const BreadCrumbs = () => {
  const location = useLocation();
  const trail = findBreadcrumbTrail(sidebarModules as SidebarLink[], location.pathname);

  if (trail.length === 0) return null;

  return (
    <Breadcrumbs className="mb-4 text-sm text-gray-600" py={20}>
      {trail.map((crumb, idx) => (
        <span
          key={crumb}
          className={idx === trail.length - 1 ? 'font-semibold text-blue-700' : ''}
        >
          {crumb}
        </span>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;