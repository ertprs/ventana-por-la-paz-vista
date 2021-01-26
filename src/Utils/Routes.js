import React from "react";
import { Home } from "../Pages/Home";
import { ProductPage } from "../Pages/ProductPage";
import { ShopPage } from "../Pages/ShopPage";
import { SearchPage } from "../Pages/SearchPage";

export const routes = [
    {
        path : '/',
        exact : true,
        render : ( props ) => <Home {...props} />
    },
    
    {
        path : '/product',
        exact : false,
        render : ( props ) => {
            return <ProductPage {...props} />
        },
    },
    
    {
        path : '/shop',
        exact : false,
        render : ( props ) => {
            return <ShopPage {...props} />
        },
    },
    
    {
        path : '/search/:search_params',
        exact : false,
        render : ( props ) => {
            return <SearchPage {...props} />
        }
    },
]

