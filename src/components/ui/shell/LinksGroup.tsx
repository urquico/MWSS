import IconChevronRight from '@/components/icons/IconChevronRight';
import { useLinksGroupStore } from '@/store/links-group-store';
import { useSidebarStore } from '@/store/sidebar-store';
import { Box, Collapse, ThemeIcon, Tooltip} from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * LinksGroup Component
 * Renders a sidebar navigation group with support for nested links (sublinks).
 * Visually connects parent and sublinks with a vertical line, and only saves the selected sidebar
 * if the item has a `link` property (i.e., is a navigable link, not just a collapsible group).
 *
 * @typedef {Object} LinksGroupProps
 * @property {'main' | 'secondary'} [variant] - The style variant for the group (default: 'main').
 * @property {React.FC<any>} icon - The icon component to display for the group.
 * @property {string} label - The display label for the group or link.
 * @property {string} [link] - The navigation target for the link (if present).
 * @property {string} [path] - The path used to determine if the link is active.
 * @property {boolean} [initiallyOpened] - Whether the group is initially expanded.
 * @property {LinkItem[]} [links] - Array of sublinks or nested groups.
 * @function handleSelect - Handles click events on the sidebar item, toggling the group and navigating if a link is
 * present.
 *
 * @param {LinksGroupProps} props - The props for the component.
 * @returns {JSX.Element} The rendered sidebar group or link, with nested sublinks if provided.
 **/

export interface LinkItem {
  label: string;
  link?: string;
  path?: string;
  icon?: React.FC<any>;
  module?: string; 
  links?: LinkItem[];
}

export interface LinksGroupProps {
  variant?: 'main' | 'secondary';
  icon?: React.FC<any>;
  label: string;
  link?: string;
  path?: string; // Optional path to determine if the link is active
  initiallyOpened?: boolean;
  links?: LinkItem[]; // Array of sublinks or nested groups
}

function LinksGroup({
  variant = 'main',
  icon: Icon,
  label,
  link,
  path,
  initiallyOpened,
  links,
}: LinksGroupProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpenSidebar, openSidebar} = useSidebarStore();
  const hasLinks = Array.isArray(links) && links.length > 0;
  const groupKey = label; // You may want to use a more unique key if labels can repeat

  // Use the groupKey to determine if this group is opened
  // If initiallyOpened is provided, it will override the store's state for this group
  // If the group is not found in the store, it defaults to initiallyOpened or false
  const opened = useLinksGroupStore(
    (state) => state.opened[groupKey] ?? initiallyOpened ?? false,
  );

  // Get the toggle function and setSelectedSidebar from the store
  // toggle is used to expand/collapse the group
  const toggle = useLinksGroupStore((state) => state.toggle);

  // setSelectedSidebar is used to set the currently selected sidebar item
  // This is used to highlight the selected item in the sidebar
  const setSelectedSidebar = useLinksGroupStore(
    (state) => state.setSelectedSidebar,
  );

  // Determine if this link is active based on the provided path
  // If path is not provided, we assume it's not active
  // If path is provided, we check if the current location starts with that path
  const isActive = !!path && location.pathname.startsWith(path);

  // Function to handle click events on the sidebar item
  // It toggles the group and sets the selected sidebar item if a link is present
  // Only set selectedSidebar if the sidebar has a link
const handleSelect = (e: React.MouseEvent) => {
    // If sidebar is closed, open it first and stop further execution
    if (!isOpenSidebar) {
      e.stopPropagation();
      openSidebar();
      return;
    }

    // Original logic for when sidebar is open
    toggle(groupKey);
    e.stopPropagation();
    if (link) {
      setSelectedSidebar({ label, path, link });
      navigate(link);
    }
  };

  // Recursively render sublinks
  // If links are provided, map them to LinksGroup components
  // If no links are provided, return an empty array
  // This allows for nested groups to be rendered correctly
  // Each item in links should be of type LinkItem
  // and can have its own links, label, link, and path properties
  const items = (hasLinks ? links : []).map((item) => (
    <LinksGroup
      key={item.label}
      icon={Icon}
      label={item.label}
      link={item.link}
      path={item.path}
      links={item.links}
      variant='secondary'
    />
  ));

  // Define styles for the main and secondary variants
  const classes = {
    main: {
      style: 'block w-full p-3 text-sm font-medium hover:bg-slate-100',
      icon: 'block',
    },
    secondary: {
      style:
        'block w-full  border-l-2 py-2 pr-3 cursor-pointer text-sm font-medium text-slate-500 hover:bg-slate-100',
      icon: 'hidden',
    },
  };

  // Add active style if this link is active
  const activeClass = isActive ? 'bg-slate-100  font-semibold' : '';
 if (!isOpenSidebar) {
    return (
      <Tooltip label={label} position="right" withArrow>
        <Box
          onClick={handleSelect}
          className={`
            relative z-10 flex justify-center items-center 
            p-4 cursor-pointer text-sm font-medium 
             hover:bg-slate-100
            ${isActive ? 'bg-slate-100' : ''}
          `}
          role='menuitem'
        >
          {Icon && <Icon size={24} />}
        </Box>
      </Tooltip>
    );
  }
  return (
    <div className={`relative w-full ${variant === 'main' ? 'pl-2' : ''}`}>
      {/* Vertical line for sublinks */}
      {variant === 'secondary' && (
        <div className='-pl-5 absolute left-0 top-0 z-0 h-full w-0.5 bg-slate-' />
      )}
      <Box
        onClick={handleSelect}
        className={`relative z-10 flex cursor-pointer items-center ${classes[variant].style} ${activeClass} ${variant === 'secondary' ? 'pl-1' : ''}`}
        aria-expanded={opened}
        role='menuitem'
      >
        <ThemeIcon
          variant='transparent'
          color='black'
          size={30}
          className={classes[variant].icon}
        >
           {Icon && <Icon size={18} />} 
        </ThemeIcon>

        {isOpenSidebar && ( // Only show label when sidebar is open
          <>
            <Box ml='md'>{label}</Box>
            {hasLinks && (
              <div className='flex items-center justify-center ml-auto'>
                <IconChevronRight
                  className={`transform text-slate-500 duration-200 ease-in-out ${opened ? '-rotate-180' : 'rotate-0'}`}
                />
              </div>
            )}
          </>
        )}
      </Box>
      {hasLinks ? (
        <Collapse in={opened} className={isOpenSidebar ? 'pl-6' : 'pl-2'}>
          {items}
        </Collapse>
      ) : null}
    </div>
  );
}

export default LinksGroup;
