import React , {useState} from 'react';
import "./shop.styles.scss";
import SHOP_DATA from './shopData.js';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

const ShopPage =  () =>{
   
    
    const [shopData, setShopData] = useState(SHOP_DATA);
    
    return(
        <div className='shop-page'>
            <h1>shop Collection</h1>
             {
                
            shopData.map(({id, ...otherCollectionProps}) =>{
                
               return  <PreviewCollection key={id} {...otherCollectionProps} />
            } )
         }
        </div>
        
    )


}

export default ShopPage;
