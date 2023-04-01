import { useRouter } from "next/router";

export default function ProductDetails() {

  const router=useRouter();
  const { productId } = router.query;


  const handleOrder = () => {
    router.push("/products")
  };

  return (
    <div>
      <h1>ProductDetails: {productId}</h1>
      <button onClick={handleOrder}>place order</button>
    </div>
  );
}
