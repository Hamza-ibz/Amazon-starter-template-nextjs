import Product from "./Product";

function ProductFeed({products}) {
    // console.log({products})
  return (
    <div>
        {/* <h1>{products}</h1> */}
    {products.map(({id,title,price,description,category,image})=>(
        <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        />
        ))}
    </div>
  );
}

export default ProductFeed