/*global kakao*/
//frontend/src/app.jsx
import React, {Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import axios from 'axios'
//css
import './App.scss'
//components
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import About from "./components/About";
import Guide from "./components/Guide";
import Footer from "./components/Footer";
import Info_Modify from "./components/Info_Modify";
import MyPost from "./components/MyPost";
import DetailPost from "./components/DetailPost"

//source
const mapMarker = 'https://img.icons8.com/dusk/64/000000/marker.png'

const baseURL = axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
axios.defaults.withCredentials = true

const App2 = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(baseURL)
            .then((res) => setPosts(res.data))
            .catch((e) => console.log(e))
        const mapScript = document.getElementById('kakao-map')
        mapScript.addEventListener('load', () => {
            kakao.maps.load(() => {
                const container = document.getElementById('map-container')
                const mapOption = {
                    center: new kakao.maps.LatLng(37.54699, 127.09598),
                    level: 3
                }
                const map = new kakao.maps.Map(container, mapOption)
                const imageSize = new kakao.maps.Size(32, 32)

                const imageOption = {offset: new kakao.maps.Point(16, 32)}
                const markerImage = new kakao.maps.MarkerImage(mapMarker, imageSize, imageOption)

                const marker = new kakao.maps.Marker({
                    position: map.getCenter(),
                    image: markerImage
                })

                marker.setMap(map)

                const customOverlay = new kakao.maps.CustomOverlay({
                    map,
                    position: map.getCenter(),
                    content: "<span class='info-window'/>",
                    yAnchor: 2.15
                })
                const geocoder = new kakao.maps.services.Geocoder()
                geocoder.coord2Address(map.getCenter().getLng(), map.getCenter().getLat(), (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        document.getElementsByClassName('info-window')[0].innerText = result[0].address.region_3depth_name + ' ' + result[0].address.main_address_no
                        console.log(result)
                    }
                })
                kakao.maps.event.addListener(map, 'click', (e) => {
                    const latlng = e.latLng
                    marker.setPosition(latlng);
                    customOverlay.setPosition(latlng)
                    geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result, status) => {
                        if (status === kakao.maps.services.Status.OK) {
                            document.getElementsByClassName('info-window')[0].innerText = result[0].address.region_3depth_name + ' ' + result[0].address.main_address_no
                            console.log(result)
                        }
                    })
                });
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        const {coords: {longitude: lng, latitude: lat}} = pos
                        map.setCenter(new kakao.maps.LatLng(lat, lng))
                        marker.setPosition(map.getCenter())
                        customOverlay.setPosition(map.getCenter())
                        alert('측정된 사용자의 위치로 이동하였습니다!')
                    }, (error) => alert(`${error.message}의 이유로 사용자의 정보를 가져오지 못했습니다.`),
                    {
                        enableHighAccuracy: true,
                        timeout: 3000
                    })
            })
        })
    }, [])

    return (
        <div>
            <div id="map-container"/>
            {posts.map(item => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <span>{item.content}</span>
                </div>
            ))}
        </div>
    )
}

class App extends Component {
    constructor(params) {
        super(params);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        axios.get(baseURL)
            .then((res) => this.setState({posts: res.data}))
            .catch((e) => console.log(e))
        const mapScript = document.getElementById('kakao-map')
        mapScript.addEventListener('load', () => {
            kakao.maps.load(() => {
                const container = document.getElementById('map-container')
                const mapOption = {
                    center: new kakao.maps.LatLng(37.54699, 127.09598),
                    level: 3
                }
                navigator.geolocation.getCurrentPosition((pos) => {
                    mapOption.center = pos
                })
                const map = new kakao.maps.Map(container, mapOption)

                const imageSize = new kakao.maps.Size(28, 39)
                const imageOption = {offset: new kakao.maps.Point(14, 39)}

                const markerImage = new kakao.maps.MarkerImage(mapMarker, imageSize, imageOption)

                const marker = new kakao.maps.Marker({
                    position: map.getCenter(),
                    image: markerImage
                })

                marker.setMap(map)
                kakao.maps.event.addListener(map, 'click', (e) => {
                    const latlng = e.latLng
                    marker.setPosition(latlng);
                });
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
        )
    }
}

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {home: true};
    }

    render() {
        const home = this.state.home;

        return (
            <div>
                <MyNav/>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/guide" component={Guide}/>
            </div>
        );
    }
}

const Test2 = withRouter(({location}) => {
    console.log(location.pathname);
    return(
        <div>
            { location.pathname != '/map' && <MyNav/>}
            <Route path="/" exact={true} component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/guide" component={Guide}/>
            <Route path="/map" component={App2}/>
            <Route path="/info_modify" component={Info_Modify}/>
            <Route path="/mypost" component={MyPost}/>
            <Route path="/detailpost/:id" component={DetailPost} />
            {/* { location.pathname != '/map' && <Footer/>} */}
        </div>
    );
})

export default Test2;