import Product from "./Product";

function ProductFeed({products}) {
    // console.log({products})
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {/* row-dense means use all space avalible on screen.puts products in grid if it hits medium screen it changes the coloums to 2  -mt means negative mt*/}
    {products.slice(0,4).map(({id,title,price,description,category,image})=>(
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

        <img className="md:col-span-full" src="https://links.papareact.com/dyz"/>

        <div className="md:col-span-2">
        {products.slice(4,5).map(({id,title,price,description,category,image})=>(
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

        {products.slice(5,products.length).map(({id,title,price,description,category,image})=>(
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