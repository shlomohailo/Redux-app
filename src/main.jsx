import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore ,compose} from 'redux';
import App from './App';
import './index.css';
import combineReducers from './store/reducers';



const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const userstore = createStore(combineReducers, {}, enhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={userstore}>
    <App />
  </Provider>
)
