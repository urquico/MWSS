import Text from '@/components/ui/Text';
import { useSidebarStore } from '@/store/useSidebarStore';
import { AppShell, Breadcrumbs } from '@mantine/core';
import { ReactNode, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SidebarToggle from './SidebarToggle';
import LinksGroup from './LinksGroup';
import NavFooter from './NavFooter';
import { sidebarModules } from '@/lib/data/sidebar-links';
import Header from './Header';
import { useLinksGroupStore } from '@/store/useLinksGroupStore';
interface ShellProps {
  children?: ReactNode;
}

/**
 * Simplified Shell Component
 * Uses sidebar-links.ts directly without needing props for links or module
 */
function Shell({ children }: ShellProps) {
  const { isOpenSidebar, toggleSidebar } = useSidebarStore();
  const location = useLocation();
  const selectedSidebar = useLinksGroupStore((state) => state.selectedSidebar);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        toggleSidebar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSidebar]);

  // You can set a fixed module name or use the first sidebar link's label
  const currentModule = sidebarModules.length > 0 ? sidebarModules[0].label : 'Menu';
  const moduleName = sidebarModules[0]?.module;
  const roleName = 'Preparer'
  return (
    <AppShell
      header={{ height: 90 }}
      navbar={{
        width: isOpenSidebar ? 280 : 80,
        breakpoint: 'sm',
        collapsed: { mobile: !isOpenSidebar },
      }}
      className="bg-background"
    >
      {/* Header */}
      <AppShell.Header className="flex items-center justify-start px-6 overflow-hidden">
        <SidebarToggle />
        {/* Header container - takes remaining space */}
        <div className="flex items-center flex-1 min-w-0 overflow-hidden">
          {/* Desktop Header - visible on md+ */}
          <div className="flex-1 hidden min-w-0 md:flex">
            <Header
              textSize={40}
              textWeight={800}
              gradientFrom="#002161"
              gradientTo="#0044C7"
              gradientDeg={87}
              groupClassName="p-2 bg-none"
              logoSize={60}
              headerText="MWSS - CORPORATE OFFICE"
              position="top-left"
              className="truncate"
            />
          </div>

          {/* Mobile Header - visible below md */}
          <div className="flex flex-1 min-w-0 md:hidden">
            <Header
              textSize={18}        
              textWeight={700}
              gradientFrom="#002161"
              gradientTo="#0044C7"
              gradientDeg={87}
              groupClassName="p-2 bg-none"
              logoSize={40}       
              headerText="MWSS - CORPORATE OFFICE"
              useAbsolutePosition={false}
            />
          </div>
        </div>
      </AppShell.Header>


      {/* Sidebar */}
      <AppShell.Navbar >
        {isOpenSidebar && (
          <>
            <AppShell.Section className="px-5 py-5 text-center">
              <Text fw={700} fz={24} className="text-blue-900 uppercase font-roboto-slab">
                {roleName}
              </Text>
            </AppShell.Section>
            <AppShell.Section className=" bg-[#FAFAFA] py-5 px-5">
              <Text fw={700} fz={20} className=" font-roboto-slab text-neutral">
                {moduleName}
              </Text>
            </AppShell.Section>
          </>
        )}

        <AppShell.Section grow component="nav" my="md" className="overflow-y-auto">
          <div className="w-full py-2">
            {sidebarModules.map((link) => (
              <LinksGroup
                key={link.label}
                icon={link.icon}
                label={link.label}
                link={link.link}
                path={link.path}
                links={link.links}
                initiallyOpened={location.pathname.startsWith(link.path || '')}
              />
            ))}
          </div>
        </AppShell.Section>

        <AppShell.Section className=" bg-[#FAFAFA] py-5 px-5">
          <NavFooter />
        </AppShell.Section>
      </AppShell.Navbar>

      {/* Main Content */}
      <AppShell.Main>
        <section className="p-4 overflow-hidden md:p-6">
          <div className="h-full overflow-auto">

            {selectedSidebar?.label && (
              <Breadcrumbs className="mb-4 text-sm text-gray-600" px={40}>
                <span>Finance</span>
                <span className="font-semibold text-blue-700">{selectedSidebar.label}</span>
              </Breadcrumbs>
            )}
            {children || <Outlet />}</div>
        </section>
      </AppShell.Main>
    </AppShell>
  );
}

export default Shell;
