import Image from 'next/image';
import palyIcon from '../public/icons/play-icon.png';
import cartIcon from '../public/icons/shopping-bag.png';
import favIcon from '../public/icons/favorite.png'

const ProductList = ({productListData}) => {

        return (
            <section className="productlists">
            {productListData.map((productList,index)=>{
                console.log(productList)
                return (
                    <div className="productlist" key={productList[0].id}>
                    <div className="container">
                        <div className="productlist-head">
                            <div className="productlist-head__title">
                                <h3>{productList[0].title}</h3>
                            </div>
                            <div className="productlist-head__view-all">
                                <h3>View All</h3>
                            </div>
                        </div>
                          <div className="productlist-cols">
                          {productList[0].productList.map((product,index) => {
                            return (
                                
                                    <div className="productlist-col" key={product.id}>
                                        <a href='' className="product">
                                            <div className="product__card">
                                                <Image 
                                                    alt ={product.movieName}
                                                    src= {product.posterURL}
                                                    width= "400"
                                                    height= "500"
                                                
                                                />
                                            </div>
                                            <div className="product__play-btn">
                                                <button href=''>
                                                    <Image
                                                    alt ='playicon'
                                                    src={palyIcon}
                                                    />
                                                </button>
                                            </div>
                                            <div className="product__details">
                                               <p className='product__title'>{product.movieName}</p>
                                               <div className='product__price-and-year'>
                                                 <p>{product.price}</p>
                                                 <div className='product__year-and-time'>
                                                    <p>{product.year}</p>
                                                    <p>{product.duration}</p>
                                                 </div>
                                               </div>
                                               
                                            </div>

                                            <div className="product__actions">
                                                <button className='product__action__addtocart'>
                                                    <Image
                                                        alt = 'carticon'
                                                        src={cartIcon}
                                                    />
                                                </button>
                                                <button className='product__action__favaroutebtn'>
                                                    <Image 
                                                        alt = 'favicon'
                                                        src={favIcon}
                                                    />
                                                </button>
                                            </div>
                                        </a>
                                     
                                    </div>
                                
                              )
                          })
                           }
                           </div>
                         
                     
                  </div>
                  </div>
                )
            })
        }
        </section>
         );
    
    
   
}
 
export default ProductList;