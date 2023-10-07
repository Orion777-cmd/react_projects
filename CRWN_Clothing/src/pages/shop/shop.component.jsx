import React , {useState, useEffect} from 'react';
import "./shop.styles.scss";

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {Route, Routes} from "react-router-dom"
import { useDispatch } from 'react-redux';
import CollectionPage from '../collection/collection.component';

import {onSnapshot, doc, getDocs, collection} from "firebase/firestore"
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils"
import { updateCollections } from '../../redux/shop/shop.reducer';


const ShopPage =  () =>{
    
    const [isLoading, setIsLoading] = useState(true);


    const dispatch = useDispatch();
    useEffect(() => {
        const collectionRef = collection(firestore, "collections");

        getDocs(collectionRef).then(snapshot => {
            const collectionSnapshot = convertCollectionsSnapshotToMap(snapshot);
            dispatch(updateCollections(collectionSnapshot));
            setIsLoading(false);
        });
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
                <Route path=':collectionUrlParam' element={<CollectionPageWithSpinner isLoading={isLoading}/>}/>
            </Routes>
           
        </div>
        
    )
}

export default ShopPage;
