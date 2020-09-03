import React from "react";
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import Card from "react-bootstrap/Card";

const CatCard = () => {
    return (
        <Card className="catCard-basic" style={{width: '18rem'}}>
            <Card.Img variant="top" src={require('../images/cat1.jpg')}/>
            <Card.Body>
                <Card.Title>구의동</Card.Title>
                <Card.Text>
                    냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥냥
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default class NewCatsSlider extends React.Component {
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
            <div>
                <div className="contentTitle">오늘의 NEW 냥이</div>
                <ItemsCarousel
                    // Placeholder configurations
                    enablePlaceholder
                    numberOfPlaceholderItems={5}
                    minimumPlaceholderTime={1000}
                    placeholderItem={<div style={{width: '18rem'}}>Placeholder</div>}

                    // Carousel configurations
                    numberOfCards={5}
                    gutter={12}
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
                    outsideChevron={false}
                >
                    {children}
                </ItemsCarousel>
            </div>
        );
    }
}
