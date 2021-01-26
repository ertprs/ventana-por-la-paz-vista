import React, { Component } from 'react';
import { Section } from '../Components/Section';
import { ShopCard } from '../Components/Cards';
import { SearchShops } from "../Services/Api";

export class SearchPage extends Component {
    
    state = {
        shopList : []
    }
    
    componentDidMount() {
        this.doSearch(this.props.match.params.search_params);
    }
    
    componentDidUpdate( prevProps, prevState, snapshot ) {
        if (prevProps.match.params.search_params !== this.props.match.params.search_params) {
            this.doSearch(this.props.match.params.search_params);
        }
    }
    
    doSearch = (search) => {
        SearchShops({search}).then(r => {
            this.setState({
                shopList : r? r : []
            })
        })
    }
    
    render() {
        const { shopList } = this.state;
        
        return (
            <>
                <Section title={'Resultados de Busqueda'}>
                    {
                        shopList.map(( item, i ) => (
                            <ShopCard
                                description={item.descripcion}
                                name={item.nombre}
                                key={i}
                                shop_id={item.id}
                            />
                        ))
                    }
                </Section>
            </>
        );
    }
}
