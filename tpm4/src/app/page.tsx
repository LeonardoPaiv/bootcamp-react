import ProductsItemList from "../components/ProductsItemList";
import { Product } from "../../model/products";
import Link from "next/link";

export default async function Home() {
  const data: Product[] = await fetch("https://fakestoreapi.com/products").then(
    (r) => r.json()
  );

  return (
    <div className="columns-1 md:columns-2">
      <ul className="list-none">
        {data.map((item) => (
          <li
            key={item.id}
            className="my-3 mx-2 shadow-md shadow-white border-white"
          >
            <Link href={`/${item.id}/visualizar`}>
              <ProductsItemList product={item} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
