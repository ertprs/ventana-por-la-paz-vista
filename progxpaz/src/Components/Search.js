import React, {Component} from 'react';
import {Button, Input} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class Search extends Component {
    render() {
        return (
            <div className={'search-bar'}>
                <Input placeholder='¿ Qué estás buscando hoy ?' className={'input'} id='searchbar'/>

                <select className={'custom-select type-select'} name='filter'>
                    <option value='tipo'>tipo</option>
                </select>

                <Button type='submit' color='primary' className={'button'}>
                    <FontAwesomeIcon icon={'search'} />
                </Button>
            </div>
        );
    }
}
