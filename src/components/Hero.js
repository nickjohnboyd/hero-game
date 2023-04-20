import React from 'react'

class Hero extends React.Component {
    
    render() {
        if (this.props.user.name) {
            return (
                <div className="Hero">
                    <div>
                        <img src={this.props.hero.img} className="hero-img"></img>
                    </div>
    
                    <h4>Congratulations {this.props.user.name} you are most like:</h4>
                    <h3>{this.props.hero.name}</h3>
                </div>
            );
        }
    }
}

export default Hero;