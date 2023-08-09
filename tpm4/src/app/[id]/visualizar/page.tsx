import { Product } from "../../../../model/products";
import ProductsItemList from "@/components/ProductsItemList";

const page = async ({ params }: { params: { id: number } }) => {
  const data: Product = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  ).then((r) => r.json());
  return (
    <div className="m-4 border p-3">
        <ProductsItemList product={data} />
    </div>
  );
};

export default page;

export const generateStaticParams = async () => {
  const data: Product[] = await fetch("https://fakestoreapi.com/products").then(
    (r) => r.json()
  );
  const paths = data.map((item) => ({ id: item.id.toString() }));

  return paths;
};

export const dynamicParams = false;
