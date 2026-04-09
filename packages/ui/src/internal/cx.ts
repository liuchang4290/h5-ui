type ClassNameValue = false | null | string | undefined;

export function cx(...classNames: ClassNameValue[]) {
  return classNames.filter(Boolean).join(' ');
}
