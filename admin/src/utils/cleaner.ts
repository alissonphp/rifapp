export const STRING_CLEANER = (value: string | undefined) => {
  return value ? value.replace(/\D/g, "") : null;
};
