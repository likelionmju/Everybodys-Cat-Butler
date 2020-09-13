import React from "react";
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const CatCard = ({regions, image, info}) => {
    return (
        <Card className="rounded mb-0 shadow-sm" style={{width: '15rem', height: '25rem'}}>
            <Card.Img variant="top" src={require('../images/cat2.jpg')}/>
            <Card.Body>
                <Card.Title>
                    <svg id="Icon_pin" className="mr-3">
                        <path
                            d="M 14.8984375 3.375 C 11.02091407775879 3.375 7.874998569488525 6.296555519104004 7.874998569488525 9.89606761932373 C 7.874998569488525 14.96854782104492 14.8984375 23.6649341583252 14.8984375 23.6649341583252 C 14.8984375 23.6649341583252 21.921875 14.96854782104492 21.921875 9.89606761932373 C 21.921875 6.296555519104004 18.77595901489258 3.375 14.8984375 3.375 Z M 14.8984375 12.68593120574951 C 13.63519477844238 12.68593120574951 12.61094379425049 11.66168212890625 12.61094379425049 10.39843845367432 C 12.61094379425049 9.135194778442383 13.63519477844238 8.110944747924805 14.8984375 8.110944747924805 C 16.16168594360352 8.110944747924805 17.18593406677246 9.135194778442383 17.18593406677246 10.39843845367432 C 17.18593406677246 11.66168212890625 16.16168594360352 12.68593120574951 14.8984375 12.68593120574951 Z"></path>
                    </svg>
                    {regions}
                </Card.Title>
                <Card.Text>
                    {info}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default class NewCatsSlider extends React.Component {
    // 여기에 데이터 넣을거임
    // 냥이 crud 들어가면 되겠다
    newCats = [
        {
            id: 0,
            regions: "구의동",
            image: '../images/cat2.jpg',
            info: '냥냥냥냥냥냥냥'
        },
        {
            id: 1,
            regions: "잠실동",
            image: '../images/cat1.jpg',
            info: '미야옹미야옹미야옹미야옹'
        },
        {
            id: 2,
            regions: "삼성동",
            image: '../images/cat2.jpg',
            info: '냥냥냥냥냥냥냥'
        },
        {
            id: 3,
            regions: "딩댕동",
            image: '../images/cat2.jpg',
            info: '냥냥냥냥냥냥냥'
        },
        {
            id: 4,
            regions: "용두동",
            image: '../images/cat2.jpg',
            info: '냥냥냥냥냥냥냥'
        },
        {
            id: 5,
            regions: "딩딩딩",
            image: '../images/cat2.jpg',
            info: '냥냥냥냥냥냥냥'
        }
    ];



    changeActiveItem = (activeItemIndex) => this.setState({activeItemIndex});

    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 0,
        });

        // this.createChildren(6)
        // createChildren 바꿔라
        setTimeout(() => {
            this.setState({
                children: this.newCats.map(cat => <CatCard key={cat.id} regions={cat.regions} image={cat.image}
                                                           info={cat.info}/>),
            })
        }, 100);
    }

    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;

        return (
            // 나중에 div 속성 다 설정해놓기
            <div className="container">
                <div style={{marginTop: '50px'}} className="content-container">
                    <div className="content-title">오늘의 NEW 냥이</div>
                    <div className="content-button" style={{float: 'right'}}>
                        <Link to="/map">
                            <Button style={{width: '180px', height: '50px'}} variant="light"
                                    className="rounded-pill map-button shadow-sm">
                                <img style={{width: '30px', height: '28px', marginRight: '7px'}}
                                     src={require('../images/mapmark.png')}/>
                                지도로 보기
                            </Button>
                        </Link>
                    </div>
                </div>

                <ItemsCarousel
                    // Placeholder configurations
                    enablePlaceholder
                    numberOfPlaceholderItems={5}
                    minimumPlaceholderTime={1000}
                    placeholderItem={<div style={{width: '18rem'}}>Placeholder</div>}

                    // Carousel configurations
                    numberOfCards={4}
                    gutter={0}
                    showSlither={true}
                    firstAndLastGutter={true}
                    freeScrolling={true}

                    // Active item configurations
                    requestToChangeActive={this.changeActiveItem}
                    activeItemIndex={activeItemIndex}
                    activePosition={'center'}

                    chevronWidth={100}
                    rightChevron={<img src={require('../images/toRight.png')}/>}
                    leftChevron={<img src={require('../images/toLeft.png')}/>}
                    outsideChevron={true}
                >
                    {children}
                </ItemsCarousel>
            </div>
        );
    }
}
