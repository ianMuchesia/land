import { typeProperties } from '@/@types/@types'
import { removeItem } from '@/redux/Features/wishlistSlice'
import { useAppDispatch, useAppSelector } from '@/redux/Hooks'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const wishlist = () => {

	const dispatch = useAppDispatch()

	const wishList = useAppSelector(state=>state.wish.itemsList)


	const handleRemoveFromWishList = (item:typeProperties)=>{
dispatch(removeItem(item))
	}

  return (
    
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 mt-20">
	<h2 className="mb-4 text-2xl font-semibold leadi">Wishlist</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			{/* <colgroup>
				<col>
				<col>
				<col>
				<col>
				<col>
				<col className="w-24">
			</colgroup> */}
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Image</th>
					<th className="p-3">Name</th>
					<th className="p-3">Location</th>
					<th className="p-3">Area</th>
					<th className="p-3 text-right">Price</th>
					<th className="p-3">View</th>
					<th className='p-3'>Action</th>
				</tr>
			</thead>
			<tbody>

				{ wishList.map(item=>(
					<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900" key={item._id}>
					<td className="p-3">
						<img src={item.mainImage.url} alt="" className='h-16 w-16 object-cover' />
					</td>
					<td className="p-3">
						<p>{item.title}</p>
					</td>
					<td className="p-3">
						<p>{item.location.name}</p>
						<p className="dark:text-gray-400">Kenya</p>
					</td>
					<td className="p-3">
						<p>{item.area}m<sup>2</sup></p>
					</td>
					<td className="p-3 text-right">
						<p>Ksh. {item.price.toLocaleString()}</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>View Details</span>
						</span>
					</td>
					<td>
						<button onClick={()=>handleRemoveFromWishList(item)} type="button"><Icon icon="gala:remove" /></button><br/>
					</td>
				</tr>
				))}
				
			</tbody>
			
		</table>
	</div>
</div>

  )
}

export default wishlist