export interface LandingMenuItem {
  title: string;
  iconSrc: string;
  path?: string;        // Optional path for navigation
  onClick?: () => void; // Optional custom click handler
}