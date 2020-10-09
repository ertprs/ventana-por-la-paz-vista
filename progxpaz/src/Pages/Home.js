import React from 'react';
import { Carrousel, ImageCarrousel } from '../Components/Section';
import ProductCard from '../Components/ProductCard';
import { ImageCard } from "../Components/ImageCard";

export default function Home() {
  return (
    <>
      <ImageCarrousel>
        <ImageCard
            alt={'hi'}
            link={'/product'}
            curimg={1}
          />
          <ImageCard
              alt={'hi'}
              link={'/product'}
              curimg={2}
          />
      </ImageCarrousel>
      <Carrousel title={'Las Ventanas Más Vistas'}>
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
        <SampleProduct />
        <SampleProduct />
        <SampleProduct />
        <SampleProduct />
      </Carrousel>
    </>
  );
}

function SampleProduct() {
  return (
      <ProductCard
          name='Artesanías la esperanza '
          price={20000}
          category='Ropa'
          discountPrice={15000}
          discountPercentage={20}
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem laudantium unde reiciendis tenetur minus harum tempore accusamus perspiciatis voluptas ex est atque autem ab illo eligendi, placeat repudiandae alias!'
          shop={true}
      />
  )
}
