export function formatToIDR(number: number): string {
  const formattedNumber = number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  // Ensure consistent decimal places and thousands separator
  return formattedNumber.replace(/,/g, ".").replace(/\.00$/, "");
}
