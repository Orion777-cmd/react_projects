import React from "react"

import "./collection.styles.scss"

import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"


import { selectCollection, selectShopData } from "../../redux/shop/shop.selector"
import CollectionItem from "../../components/collection-item/collection-item.component"

const CollectionPage = ()  =>{
    const {collectionUrlParam} = useParams()
    console.log("collectionUrlParam", collectionUrlParam)

    const {title, items} = useSelector((state) => 
        selectCollection(state)(collectionUrlParam)
    );

    
    
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>

            <div className="items">
            {
                items.map(item =>
                    <CollectionItem key={item.id} item={item} />
                )
            }
            </div>
           
        </div>
    )
}

export default CollectionPage;