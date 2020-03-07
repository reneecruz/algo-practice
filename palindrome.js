// strip non-alphanumeric characters and convert to lowercase 

const clean = (string) => string.toLowercase().replace(/[\w_]/g, '');