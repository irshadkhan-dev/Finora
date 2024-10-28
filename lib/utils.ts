import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const encryptId = (id: string) => {
  return btoa(id);
};

export const extractCustomerIdFromUrl = (url: string) => {
  const parts = url.split("/");

  const customerId = parts[parts.length - 1];

  return customerId;
};
