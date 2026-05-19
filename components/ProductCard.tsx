type ProductCardProps = {
  title: string;
  price: number;
};

const ProductCard = ({ title, price }: ProductCardProps) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-xl font-bold">${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
