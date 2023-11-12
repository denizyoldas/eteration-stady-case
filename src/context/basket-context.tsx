import { Product } from "@/types/product/index.model";
import { createContext, useState } from "react";

interface BasketContextType {
  basket: { product: Product; count: number }[];
  total: number;
  addToBasket: (product: Product) => void;
  removeFromBasket: (product: Product) => void;
  itemCountIncrement: (product: Product) => void;
  itemCountDecrement: (product: Product) => void;
}

const initialState: BasketContextType = {
  basket: [],
  total: 0,
  addToBasket: () => {},
  removeFromBasket: () => {},
  itemCountIncrement: () => {},
  itemCountDecrement: () => {},
};

const BasketContext = createContext(initialState);

const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [basket, setBasket] = useState<{ product: Product; count: number }[]>(
    []
  );
  const [total, setTotal] = useState(0);

  const addToBasket = (product: Product) => {
    const basketItem = basket.find((item) => item.product.id === product.id);

    if (basketItem) {
      basketItem.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { product, count: 1 }]);
    }

    setTotal(total + Number(product.price));
  };

  const removeFromBasket = (product: Product) => {
    const basketItem = basket.find((item) => item.product.id === product.id);

    if (basketItem) {
      basketItem.count--;
      setBasket([...basket]);
    }

    setTotal(total - Number(product.price));
  };

  const itemCountIncrement = (product: Product) => {
    const basketItem = basket.find((item) => item.product.id === product.id);

    if (basketItem) {
      basketItem.count++;
      setBasket([...basket]);
    }
  };

  const itemCountDecrement = (product: Product) => {
    const basketItem = basket.find((item) => item.product.id === product.id);

    if (basketItem) {
      basketItem.count--;
      setBasket([...basket]);
    }
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        total,
        addToBasket,
        itemCountDecrement,
        itemCountIncrement,
        removeFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
