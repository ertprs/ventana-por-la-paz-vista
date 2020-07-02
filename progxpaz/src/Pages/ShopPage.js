import React, { Component } from 'react';
import { LikeButton } from "../Components/Objects/LikeButton";
import Section from "../Components/Section";

export class ShopPage extends Component {
    render() {
        return (
            <>
                <div className='container expand-md'>
                    <div className='row align-items-center'>
                        <div className='col-xs-5 ml-5'>
                            <div className='carousel' />
                        </div>
                        <div className='col-md-6 col-sm-12 align-self-start mt-3'>
                            <div className='d-flex align-items-baseline'>
                                <h1 className='mr-3'>Nombre de Tienda</h1>
                                <LikeButton />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                                voluptate, sint quo beatae perferendis ipsum fugiat sapiente velit
                                aut? Magni dolor, placeat fugit dignissimos totam deleniti.
                                Mollitia omnis ab perferendis?
                            </p>

                            <div className='tags-container'>
                                <span className='tag'>tag</span>
                                <span className='tag'>tag</span>
                                <span className='tag'>tag</span>
                                <span className='tag'>tag</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Section title={'Productos'}/>
            </>
        );
    }
}
