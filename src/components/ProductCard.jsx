import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className='block'>
    <div className='mt-5 border border-gray-100 rounded-4 hover:shadow-lg  '>
    <img  src={item.image} alt={item.name} className=''/>
    <h3 className='mt-5 mb-3 font-semibold text-lg'>{item.name} </h3>
    <div className='flex items-center -mt-3'><p className='mb-2 font-semibold text-lg'>₦{item.price.toLocaleString()} </p>
    <a className='ml-auto -mt-5 font-medium border bg-green-400 rounded-lg p-3'>Order now</a>
    </div>
    </div>
    </Link>
  )
}

export default ProductCard;