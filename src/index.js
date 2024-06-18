import message from './message';
// Using Webpack, we can bundle CSS files through our built JS file, meaning we do not need to include our CSS files in our final dist folder.
import './css/style.css';

console.log(message);

const hello = () => console.log('Hello');