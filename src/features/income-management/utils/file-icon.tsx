import IconPDF from '@/components/icons/IconPDF.svg';
import IconJPG from '@/components/icons/IconJPG.svg';
import IconDocs from '@/components/icons/IconDocs.svg';
/**
 * @file file-icon.tsx
 * @description
 * Utility for returning the appropriate file icon component based on file extension.
 *
 * @usage
 * - Import and use `getFileIcon(filename)` to render a file type icon in your UI.
 * - Supports PDF, image (jpg, jpeg, png), and document (doc, docx) icons.
 *
 * @example
 * import { getFileIcon } from '@/features/income-management/utils/file-icon';
 * ...
 * {getFileIcon(file.name)}
 *
 * @see
 * Add more file type icons as needed for additional extensions.
 */
export function getFileIcon(filename: string): JSX.Element {
  let icon = IconDocs; // default

  if (filename.endsWith('.pdf')) icon = IconPDF;
  else if (/\.(jpg|jpeg|png)$/i.test(filename)) icon = IconJPG;
  else if (/\.(doc|docx)$/i.test(filename)) icon = IconDocs;

  return <img src={icon} alt="file icon" width={20} height={20} />;
}
