import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import QueryString from "qs";

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

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = QueryString.parse(params);

  currentUrl[key] = value;

  const querystring = QueryString.stringify(currentUrl, { skipNulls: true });

  return `${window.location.pathname}?${querystring}`;
}

export function getAccountTypeColors(type: AccountTypes) {
  switch (type) {
    case "depository":
      return {
        bg: "bg-blue-25",
        lightBg: "bg-blue-100",
        title: "text-blue-900",
        subText: "text-blue-700",
      };

    case "credit":
      return {
        bg: "bg-success-25",
        lightBg: "bg-success-100",
        title: "text-success-900",
        subText: "text-success-700",
      };

    default:
      return {
        bg: "bg-green-25",
        lightBg: "bg-green-100",
        title: "text-green-900",
        subText: "text-green-700",
      };
  }
}

export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}
