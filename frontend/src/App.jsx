//frontend/src/app.js
import React, { Component } from 'react';
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }


    async componentDidMount() {
        axios.get(axios.defaults.baseURL)
            .then(({data}) => this.setState({ posts: data }))
            .catch(e => console.log(e))
    }

    render() {
        return (
            <div>
                {this.state.posts}
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;