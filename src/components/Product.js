import Image from 'next/image'
import {useState} from 'react'
import {StarIcon} from "@heroicons/react/solid";
import Currency from 'react-currency-formatter';

const MAX = 5
const MIN = 2 

function Product({id,title,price,description,category,image}) {

    const [rating] = useState(
        Math.floor(Math.random() * (MAX - MIN) + MIN)
    );

    const [hasPrime] = useState( Math.random() <0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
    <p className="absolute top-2 right-2 text-xs italic text-grey-400">{category}</p>

    <Image src={image} height={200} width={200} objectFit="contain"/>

    <h4 className='my-3'>{title}</h4>
    
    <div className="flex">
        {Array(rating)
        .fill()
        .map((_,i)=>(
        <StarIcon className="h-5 text-yellow-500"/>
        )
        )}
    </div>

    <p className="text-xs my-2 line-clamp-2">{description}</p> 
    {/* mb-2 mt2 is the same as my-2 */}

    <div className='mb-5'>
        <Currency quantity={price} currency="GBP"/>
    </div>

    {hasPrime && (
        <div className='item-center space-x-2 -mt-5'>
            <img className='w-12' src='https://links.papareact.com/fdw'/>
            <p className='text-xs text-grey-500'>Free next day delivery</p>
        </div>
    )}

    <button className='mt-auto button'>Add to cart</button>

    </div>
  )
}

export default Product