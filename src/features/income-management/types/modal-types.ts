/**
 * @file modal-types.ts
 * @description
 * Central type definition for modal dialog types in the MWSS Income/Raw Water Management app.
 *
 * @usage
 * - Use `ModalType` to type modal state, modal store, or modal-related props.
 * - Ensures consistent handling of different modal dialogs across the application.
 *
 * @example
 * import { ModalType } from '@/features/income-management/types/modal-types';
 * const [modal, setModal] = useState<ModalType>(null);
 *
 * @see
 * - Add new modal types here as new modal dialogs are introduced.
 */


export type ModalType =
  | 'create'
  | 'generate'
  | 'template'
  | 'viewHistory'
  | 'addRemarks'
  | 'edit'
  | null;