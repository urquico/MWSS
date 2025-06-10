import IconPDF from '@/components/icons/IconPDF.svg';
import IconJPG from '@/components/icons/IconJPG.svg';
import IconDocs from '@/components/icons/IconDocs.svg';

export function getFileIcon(filename: string): JSX.Element {
  let icon = IconDocs; // default

  if (filename.endsWith('.pdf')) icon = IconPDF;
  else if (/\.(jpg|jpeg|png)$/i.test(filename)) icon = IconJPG;
  else if (/\.(doc|docx)$/i.test(filename)) icon = IconDocs;

  return <img src={icon} alt="file icon" width={20} height={20} />;
}
