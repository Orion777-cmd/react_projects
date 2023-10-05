import React , {useState} from 'react';
import "./shop.styles.scss";

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const ShopPage =  () =>{
       
    return(
        <div className='shop-page'>
            <h1>shop Collection</h1>
            <CollectionOverview />
        </div>
        
    )
}

export default ShopPage;
