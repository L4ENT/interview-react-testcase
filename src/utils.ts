export function formatPrice(price: number) {
    return price.toLocaleString("en-US").replace(",", " ")
}