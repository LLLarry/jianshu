import React from 'react';
import Header from '@c/Header'
import GlobalStyle from '@/static/iconfont/iconfont'
import { Provider } from 'react-redux'
import store from '@/store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '@/pages/home'
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <GlobalStyle />
                <Header />
                <Router>
                    <Route path="/" exact component={ Home }></Route>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
