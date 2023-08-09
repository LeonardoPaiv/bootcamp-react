import Image from "next/image";
import { Product } from "../../model/products";
import ProductPrice from "./ProductPrice";

const ProductsItemList = (props: { product: Product }) => {
  const { product } = props;

  return (
    <div className="flex w-auto">
      <Image src={product.image} width={144} height={144} alt={product.title} />
      <div className="p-3">
        <h2>{product.title}</h2>
        <div className="flex justify-around my-2">
          <p className="bg-orange-300 px-3 rounded-xl">{product.rating.rate}</p>
          <p className="bg-green-500 px-3 rounded-xl">{product.category}</p>
          <ProductPrice id={product.id}/>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductsItemList;
