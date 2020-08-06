const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const handleEmail = (value: string): string =>
  value === undefined || value === null || value === ""
    ? `Please enter email`
    : value.search(regex)
    ? `Invalid email`
    : "";

export const isRequired = (value: string, field?: string): string =>
  value === undefined || value === null || value === ""
    ? `Please enter ${field && field ? field : `field`}`
    : "";
