import React, {Component} from 'react';
import {ProductCard} from "./ProductCard";

export class BestSellers extends Component {
    render() {
        return (
            <div className={'best-sellers'}>
                <div className={'title'}>
                    <span className={'main'}> Lo Mas Vendido </span>
                    <span className={'sub'}> ver mas </span>
                </div>
                <div className={'flex-row'}>

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
            </div>
        );
    }
}
