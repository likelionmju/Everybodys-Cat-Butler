import React from 'react';

const About = () => {
    const style = {
        width:'200px',
        justifyContent: 'center',
        textAlign:'center',
        backgroundColor:'red'
    }
    return (
        <div className="container">
            <img style={{textAlign:'center', marginTop:'90px'}} src={require('../images/about.png')} width='60%'/>
        </div>
    );
};

export default About;