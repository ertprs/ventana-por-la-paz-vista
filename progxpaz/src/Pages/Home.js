import React, { Component } from 'react';
import { Section } from '../Components/Section';
import ProductCard from '../Components/ProductCard';

export default class Home extends Component {
    render() {
        return (
            <>
                <Section title={'Las Ventanas Más Vistas'}>
                    <ProductCard
                        name='Almacén Rosalía'
                        price={30000}
                        category='Ropa'
                        discountPrice={15000}
                        discountPercentage={50}
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem laudantium unde reiciendis tenetur minus harum tempore accusamus perspiciatis voluptas ex est atque autem ab illo eligendi, placeat repudiandae alias!'
                        shop={true}
                    />
                    <ProductCard
                        name='Exportaciones All-Sports'
                        price={60000}
                        category='Ropa'
                        discountPrice={54000}
                        discountPercentage={10}
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem laudantium unde reiciendis tenetur minus harum tempore accusamus perspiciatis voluptas ex est atque autem ab illo eligendi, placeat repudiandae alias!'
                        shop={true}
                    />
                    <ProductCard
                        name='Artesanías la esperanza '
                        price={20000}
                        category='Ropa'
                        discountPrice={15000}
                        discountPercentage={20}
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem laudantium unde reiciendis tenetur minus harum tempore accusamus perspiciatis voluptas ex est atque autem ab illo eligendi, placeat repudiandae alias!'
                        shop={true}
                    />
                </Section>
            </>
        );
    }
}
