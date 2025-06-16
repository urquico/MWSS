import {CreateFieldConfig} from '@/features/income-management/types/modal-fields';
import { GenerateFieldConfig } from "@/features/income-management/types/modal-fields";
// Map display config to form config
export function generateToCreateField(
  field: GenerateFieldConfig,
  defaults: Partial<CreateFieldConfig> = {}
): CreateFieldConfig {
  // Destructure value out so it's not included in the result
  const { value, ...rest } = field;
  return {
    ...rest,
    ...defaults,
    type: defaults.type || 'text',
    defaultValue: value,
  };
}