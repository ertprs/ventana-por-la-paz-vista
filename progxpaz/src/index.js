import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
    faSearch, faHeart as heartFill, faSquare, faCheckSquare, faEye,
    faEyeSlash, faPen, faChevronRight, faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartStroke } from '@fortawesome/free-regular-svg-icons';

library.add(
    faSearch, heartFill, heartStroke, faSquare, faCheckSquare, faEye,
    faEyeSlash, faPen, faWhatsapp, faChevronRight, faChevronLeft
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
