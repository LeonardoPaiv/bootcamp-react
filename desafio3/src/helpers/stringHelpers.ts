export const getCurrency = (valor: number) => {
    return valor.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };