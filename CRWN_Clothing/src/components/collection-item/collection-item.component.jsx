import React from "react"
import {useSelector, useDispatch} from "react-redux"

import "./collection-item.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
import { addItem } from "../../redux/cart/cart.reducer"

const CollectionItem = ({item}) =>{
    const {id, name, price, imageUrl} = item;
   
    const dispatch = useDispatch();
    return (
        <div className="collection-item">
            <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            
            <CustomButton onClick={( )=> dispatch(addItem(item))}>Add To Cart</CustomButton>
        </div>
    )
}

export default CollectionItem;