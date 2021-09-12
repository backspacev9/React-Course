import * as ReactDOM from 'react-dom';
import App from './app';

const reactapp = document.createElement('div');
reactapp.className = 'reactapp';
document.body.appendChild(reactapp);
ReactDOM.render(App(), reactapp);
