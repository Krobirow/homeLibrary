import * as React from 'react';
import BookHandlerContainer from '../books/bookHandlerContainer';
import Footer from '../footer/footer';
import Header from '../header/header';
import { Provider } from "react-redux";
import './App.scss';
import store from '../../reduxStore/redux-store';

const App:React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App d-flex justify-content-center row">
        <Header />
        <BookHandlerContainer />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
