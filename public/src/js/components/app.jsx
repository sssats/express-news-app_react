import React from 'react';
import Header from './header.jsx';

class App extends React.Component {
    render() {
        return (
            <section id="main">
                <Header/>
                {this.props.children}
            </section>
        )
    }
}

export default App;
