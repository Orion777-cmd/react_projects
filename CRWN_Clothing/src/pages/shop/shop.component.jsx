import React , {useState} from 'react';
import "./shop.styles.scss";

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import {Route, Routes} from "react-router-dom"
import CollectionPage from '../collection/collection.component';


const ShopPage =  () =>{
       
    return(
        <div className='shop-page'>
            <Routes>
                <Route index element={<CollectionOverview/>}/>
                <Route path=':collectionUrlParam' element={<CollectionPage/>}/>
            </Routes>
           
        </div>
        
    )
}

export default ShopPage;
