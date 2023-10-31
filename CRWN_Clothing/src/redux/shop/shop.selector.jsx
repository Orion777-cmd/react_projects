import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  shop => shop.shopData
);

export const selectIsLoading = createSelector(
  [selectShop],
  shop => shop.isLoading
);

export const selectError = createSelector(
  [selectShop],
  shop => shop.error
);

export const selectShopDataForPreview = createSelector(
    [selectShopData],
    shopData => (shopData) ? Object.keys(shopData).map(key => shopData[key]) : []
  );

  export const selectCollection = createSelector(
    [selectShopData],
    
    (shopData) => (collectionUrlParam) =>
    
      shopData ? shopData[collectionUrlParam] : null
  );

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.shopData
)
  