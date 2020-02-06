import React, {Component} from 'react';
import {img} from '../Assets/images/img.jpg';
import {LikeButton} from "./LikeButton";

export class ProductCard extends Component {

    state = {
      info : []
    };

    render() {
        return (
            <div className={'product-card'} style={{backgroundImage : img}}>
                <div className={'row-like'}>
                    <LikeButton/>
                </div>
                <div className={'row-img'}>

                </div>
                <div className={'row-cat'}>
                    <div className={'cat-tag'}>
                        CATEGORY
                    </div>
                </div>
                <div className={'row-body'}>
                    <div className={'prod-name'}>
                        PRODUCT NAME
                    </div>
                    <div className={'prod-info'}>
                        <div className={'info-price-orig'}>
                            COP 30.000
                        </div>
                        <div className={'info-price-new'}>
                            COP 15.000
                        </div>
                        <div className={'info-price-perc'}>
                            50% OFF
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}