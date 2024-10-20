import React from 'react'
import { Link } from 'react-router-dom'
import prd1 from '../../assets/imgs/prd1.jpg'
import prd2 from '../../assets/imgs/prd2.jpg'
import prd3 from '../../assets/imgs/prd3.jpg'
import prd4 from '../../assets/imgs/prd4.jpg'

export default function Products({handleAddToCart}) {
  const products =[
    {
      id: 1, productName: 'Đồng hồ Edox Chronorally', productImg: prd1, price: 74970000, description: 'Đồng hồ Edox Chronorally 01129-TBUCBR-BUBR mang đến một thiết kế đầy tinh tế với những đường nét trên mặt số được khắc họa chi tiết và tỉ mỉ. Chiếc đồng hồ Edox này sẽ là sự lựa chọn tuyệt vời dành cho các bạn nam yêu thích phong cách vừa cổ điển vừa mạnh mẽ và sang trọng.'
    },
    {
      id: 2, productName: 'Đồng hồ Citizen', productImg: prd2, price: 6813000, description: 'Đồng hồ Citizen 42 mm Nam NH8400-87L thuộc thương hiệu Citizen của Nhật Bản.'
    },
    {
      id: 3, productName: 'Đồng hồ Citizen Tsuyosa', productImg: prd3, price: 10263000, description: 'Đồng hồ Citizen Tsuyosa 40 mm Nam NJ0152-51X mẫu mới thuộc thương hiệu Orient của Nhật Bản '
    },
    {
      id: 4, productName: 'Đồng hồ Casio', productImg: prd4, price: 2756000, description: 'Đồng hồ Casio 34 mm Nam MTP-M305L-7AVDF là một chiếc đồng hồ nam đến từ thương hiệu Casio nổi tiếng của Nhật Bản.'
    },
  ]
  return (
      <section className='container mx-auto p-6'>
          <h2 className='text-2xl font-bold text-center mb-5'>Danh sách đồng hồ</h2>
          <div className='grid grid-cols-4 gap-5'>
            {products.map((product) => {
              return (
                <div key={product.id} className='bg-white shadow-md p-4 rounded-lg'>
                    <img src={product.productImg} alt={product.productName} className='w-80 h-80 object-cover rounded-tl-lg'/>
                    <h3 className='text-lg font-semibold mt-5'>{product.productName}</h3>
                    <p className='text-red-400 font-medium text-lg'>Giá: {product.price.toLocaleString()} VNĐ</p>
                    <Link to={`/product-detail/${product.id}`} state={{product}} className='w-full block text-center bg-blue-500 text-white py-2 rounded-lg mb-2'>Chi tiết sản phẩm</Link>
                    <button onClick={() => { handleAddToCart(product) }} className='w-full block bg-green-600 text-white py-2 rounded-lg'>Thêm sản phẩm</button>
                  </div>
              )
            }
          )}
          </div>
      </section>
  )
}
