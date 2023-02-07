import Accordion from '../components/Accordion';
import HeroSlider from '../components/HeroSilder';
import ProductList from '../components/ProductList';
import Publishers from '../components/Publishers';
import productListData  from '../productList';
import Faq from '../components/Faq';

const Home = () => {
  return ( 
    <div className='main'>
       <HeroSlider />
       <ProductList productListData = {productListData} />
       <Publishers />
       <Faq />
    </div>
    
    
   
   );
}
 
export default Home;