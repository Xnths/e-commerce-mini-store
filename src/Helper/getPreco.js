export default function getPreco(preco) {
    const precoFormatado = `R$ ${Number.parseFloat(preco).toFixed(2)}`;
    return precoFormatado;
}