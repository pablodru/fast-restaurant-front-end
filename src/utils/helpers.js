export function getName() {
    const {name} = JSON.parse(localStorage.getItem('data'));
    return name;
}

export function updateName(newName) {
  const data = JSON.parse(localStorage.getItem('data')) || {};
  data.name = newName;
  localStorage.setItem('data', JSON.stringify(data));
}

export const calculateTotalPrice = (orders) => {
    return orders.reduce((totalPrice, order) => {
      const orderTotal = order.products.reduce((productTotal, product) => {
        const productPrice = product.additionalId ? 100 : product.price;
        return productTotal + productPrice;
      }, 0);
  
      const additionalTotal = order.orderAdditionals.reduce((additionalTotal, additional) => {
        const additionalPrice = additional.additionalId ? 100 : additional.price;
        return additionalTotal + additionalPrice;
      }, 0);
  
      return totalPrice + orderTotal + additionalTotal;
    }, 0);
  };