import React from 'react';

const About = () => {
    const style = {
        width:'200px',
        justifyContent: 'center',
        textAlign:'center',
        backgroundColor:'red'
    }
    return (
        <div>
            <div className="align" style={style}>
                <h1>소개</h1>
                <p>소개 페이지다!</p>
            </div>
        </div>
    );
};

export default About;