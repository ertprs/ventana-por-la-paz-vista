import React, {Component} from 'react';
import {ProductCard} from "./ProductCard";

export class Section extends Component {

    state = {
        title : '',
        link : ''
    }

    render() {
        let {title, link} = this.state;

        return (
            <div className={'section'}>
                <div className={'title'}>
                    <span className={'main'}> Lo Mas Vendido </span>
                    <span className={'link'}> ver mas </span>
                </div>
                <div className={'flex-row'}>

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
            </div>
        );
    }
}
