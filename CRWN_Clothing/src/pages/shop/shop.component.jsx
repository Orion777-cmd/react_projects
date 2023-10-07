import React , {useState, useEffect} from 'react';
import "./shop.styles.scss";

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {Route, Routes} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import CollectionPage from '../collection/collection.component';

import {onSnapshot, doc, getDocs, collection} from "firebase/firestore"
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils"
import { fetchShopData } from '../../redux/shop/shop.reducer';
import { createStructuredSelector } from 'reselect';
import { selectShopData, selectIsLoading, selectError , selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';

const ShopPage =  () =>{
    
    const {isCollectionLoaded, isLoading, error} = useSelector(
        createStructuredSelector({
            isCollectionLoaded : selectIsCollectionsLoaded,
            isLoading: selectIsLoading,
            error: selectError
        })
    )
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchShopData())
        // const unsubscribeFromAuth = onSnapshot(collectionRef, async snapshot => {
        //     const collectionSnapshot = convertCollectionsSnapshotToMap(snapshot);
        // //    console.log(collectionSnapshot)
        //     dispatch(updateCollections(collectionSnapshot))
        //     setIsLoading(false);
        // });
        
    
        // return () => {
             
        //     unsubscribeFromAuth();
        // };
    }, []);

    const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
    const CollectionPageWithSpinner = WithSpinner(CollectionPage)
    return(
        <div className='shop-page'>
            <Routes>
                <Route index element={<CollectionsOverviewWithSpinner isLoading={isLoading} />}/>
                <Route path=':collectionUrlParam' element={<CollectionPageWithSpinner isLoading={!isCollectionLoaded}/>}/>
            </Routes>
           
        </div>
        
    )
}

export default ShopPage;
