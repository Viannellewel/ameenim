function truncateMiddle(str, length) {
  if (str.length <= length) return str;
  const start = Math.ceil((length - 3) / 2);
  const end = str.length - Math.floor((length - 3) / 2);
  return `${str.slice(0, start)}...${str.slice(end)}`;
}

const s = "This is a long string";
const truncatedString = truncateMiddle(s, 10);
console.log(truncatedString);
