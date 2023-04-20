import React from 'react'

class Hero extends React.Component {

    render() {
        if (this.props.user.name) {
            return (
                <div className="Hero mt-5 flex flex-col items-center">
                    <h3 className="font-bold text-lg" >Congratulations!</h3>
                    <div>
                        <span className="font-bold italic text-blue-900">{this.props.user.name} </span>
                        you are most similar to:
                    </div>
                    <h2 className="font-bold text-blue-950 text-xl mt-6 border-2 border-blue-950 rounded-md p-4 w-80">{this.props.hero.name}</h2>
                    <div>
                        <img src={this.props.hero.img} className="h-48 mt-6 rounded-md"></img>
                    </div>
                </div>
            );
        }
    }
}

export default Hero;