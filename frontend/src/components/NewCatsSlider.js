import React from "react";
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const CatCard = () => {
    return (
        <Card className="rounded mb-0 shadow-sm" style={{width: '15rem', height:'25rem'}}>
            <Card.Img variant="top" src={require('../images/cat2.jpg')}/>
            <Card.Body>
                <Card.Title>구의동</Card.Title>
                <Card.Text>
                    냥냥냥냥냥냥냥
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default class NewCatsSlider extends React.Component {
    // 여기에 데이터 넣을거임
    createChildren = n => range(n).map(i => <CatCard key={i}/>);
    changeActiveItem = (activeItemIndex) => this.setState({activeItemIndex});

    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 0,
        });

        setTimeout(() => {
            this.setState({
                children: this.createChildren(20),
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
                <div style={{marginTop:'50px'}} className="content-container">
                    <div className="content-title">오늘의 NEW 냥이</div>
                    <div className="content-button" style={{float:'right'}}>
                        <Link to="/map">
                            <Button style={{width:'180px', height:'50px'}} variant="light" className="rounded-pill map-button shadow-sm">
                            <img style={{width:'30px', height:'28px', marginRight:'7px'}} src={require('../images/mapmark.png')}/>
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