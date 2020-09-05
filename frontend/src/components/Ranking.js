import React from "react";
import Card from "react-bootstrap/Card";
import {ReactComponent as Cat} from "../images/cat.svg";
import range from 'lodash/range';
import ItemsCarousel from "react-items-carousel";

const CareGiver = () => {
    return (
        <Card style={{width: '10rem', height: '15rem'}}>
            <Cat className="card-img-top"/>
            <Card.Body>
                <Card.Title>고양이납치범</Card.Title>
                <Card.Text>
                    구의동 / 용두동
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

class Ranking extends React.Component {
    createChildren = n => range(n).map(i => <CareGiver key={i}/>);
    changeActiveItem = (activeItemIndex) => this.setState({activeItemIndex});

    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 0,
        });

        setTimeout(() => {
            this.setState({
                children: this.createChildren(10),
            })
        }, 100);
    }

    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;

        return (
            <div className="container">
                <div className="content-container">
                    <div style={{borderBottom: '6px solid #8DA4CF'}} className="content-title">집사 랭킹 TOP10</div>
                </div>
                <ItemsCarousel
                    // Placeholder configurations
                    enablePlaceholder
                    numberOfPlaceholderItems={5}
                    minimumPlaceholderTime={1000}
                    placeholderItem={<div style={{width: '18rem'}}>Placeholder</div>}

                    // Carousel configurations
                    numberOfCards={6}
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
        )
    }
}

export default Ranking;