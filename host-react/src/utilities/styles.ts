import { cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge'

type ClassValue = Parameters<typeof cx>[0];

export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs))
}
