import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  Select as $Select,
  ComboboxItem,
  type SelectProps as $SelectProps,
} from "@mantine/core";

export type SelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$SelectProps, "value" | "defaultValue">;

export function Select<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  classNames,
  onChange,
  ...props
}: SelectProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$Select
      classNames={classNames}
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e, { label: e, value: e } as ComboboxItem);
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}
