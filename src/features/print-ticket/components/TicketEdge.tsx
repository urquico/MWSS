/**
 * TicketEdge component renders two circular elements on opposite sides of the screen, typically used for visual decoration.
 *
 * These elements are positioned on the left and right edges of the screen, centered vertically with a custom size and style that adjusts based on the screen size (small, medium, large).
 *
 * @component
 *
 * @returns {JSX.Element} Two circular elements positioned on the left and right sides of the screen, used for styling the edges of the ticket component.
 *
 * Styling:
 * - Positioning: Elements are positioned absolutely on the left and right sides, centered vertically.
 * - Responsiveness: Adjusts the size and position based on the screen size using Tailwind's responsive classes (`small-kiosk`, `medium-kiosk`, `large-kiosk`).
 * - Shape: The elements are circular with a border and a background color.
 */

function TicketEdge() {
  return (
    <>
      <div className='border-background absolute -left-8 top-1/2 -ml-5 h-10 w-10 -translate-y-1/2 transform rounded-full border bg-background small-kiosk:-translate-y-1/2 medium-kiosk:-ml-7 medium-kiosk:h-14 medium-kiosk:w-14 large-kiosk:-ml-8 large-kiosk:h-16 large-kiosk:w-16'></div>
      <div className='border-background absolute -right-8 top-1/2 -mr-5 h-10 w-10 -translate-y-1/2 transform rounded-full border bg-background small-kiosk:-translate-y-1/2 medium-kiosk:-mr-7 medium-kiosk:h-14 medium-kiosk:w-14 large-kiosk:-mr-8 large-kiosk:h-16 large-kiosk:w-16'></div>
    </>
  );
}

export default TicketEdge;
