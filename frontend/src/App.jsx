/*global kakao*/
//frontend/src/app.jsx
import React, {Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
//css
import './App.css'
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
                    content: '<div style="width: 100px; height: 30px; background-color: black"></div>',
                    yAnchor: 2.2
                })
                const geocoder = new kakao.maps.services.Geocoder()
                kakao.maps.event.addListener(map, 'click', (e) => {
                    const latlng = e.latLng
                    marker.setPosition(latlng);
                    customOverlay.setPosition(latlng)
                    geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result, status) => {
                        if (status === kakao.maps.services.Status.OK) {
                            console.log('그런 너를 마주칠까 ' + result[0].address.address_name + '을 못가');
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

export default App2;