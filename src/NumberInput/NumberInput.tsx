import {
  type UseControllerProps,
  useController,
  type FieldValues,
} from "react-hook-form";
import {
  NumberInput as $NumberInput,
  type NumberInputProps as $NumberInputProps,
} from "@mantine/core";

export type NumberInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$NumberInputProps, "value" | "defaultValue">;

export function NumberInput<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  classNames,
  onChange,
  ...props
}: NumberInputProps<T>) {
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
    <$NumberInput
      classNames={classNames}
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}
