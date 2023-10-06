import React from "react"
import "./collection-overview.styles.scss";

import {useSelector} from "react-redux";
import {createStructuredSelector} from "reselect"
import { selectShopDataForPreview } from '../../redux/shop/shop.selector';

import PreviewCollection from "../preview-collection/preview-collection.component";


const CollectionOverview = ()=>{

    const {collections} = useSelector(
        createStructuredSelector({
            collections : selectShopDataForPreview
        })
    )
    return (
        <div className="collections-overview">
            {
            
            collections.map(({id, ...otherCollectionProps}) =>{
                
                return  <PreviewCollection key={id} {...otherCollectionProps} />
            } )
            }
        </div>
    )
}

export default CollectionOverview;