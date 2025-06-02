import { TableRowActions } from '@/components/ui/table/types/table-types';
import { BSBtnText,getBSRowActions } from '../components/BIllingStatement';
import { renderSOARowButton } from '../components/SOAToolbar';

export const getRowActionsConfig = (
  viewType: string,
  handleGenerateRow: (row: any) => void
): TableRowActions | undefined => {
  switch (viewType) {
    case 'billing-statement':
      return {
        renderMenu: getBSRowActions(handleGenerateRow),
        renderButton: undefined,
        buttonText: BSBtnText
      };
    case 'statement-of-account':
      return renderSOARowButton();
    default:
      return undefined;
  }
};