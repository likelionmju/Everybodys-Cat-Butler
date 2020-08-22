/*global kakao*/
//frontend/src/app.jsx
import React, {Component} from 'react';
import axios from 'axios'

//css
import './App.css'

const baseURL = axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
axios.defaults.withCredentials = true

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        axios.get(baseURL)
            .then((res) => this.setState({posts: res.data}))
            .catch((e) => console.log(e))
        const mapScript = document.getElementById('kakao-map')
        mapScript.addEventListener('load', () => {
            kakao.maps.load(() => {
                const container = document.getElementById('map-container');
                const mapOption = {
                    center: new kakao.maps.LatLng(37.566826, 126.9786567),
                    level: 3
                };

                const map = new kakao.maps.Map(container, mapOption);
            })
        });
    }

    render() {
        return (
            <div>
                <div id="map-container"/>
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