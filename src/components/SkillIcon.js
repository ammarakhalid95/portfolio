import React, { Component } from "react";

class SkillIcon extends Component {
    render() {
        return (
            <div className="skill-icon">
                {console.log(this.props.src)}
                <img src={process.env.PUBLIC_URL + this.props.src} alt={this.props.alt} style={{fill: "white"}}/>
                <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px"}}
                    
                >
                    {this.props.name}
                </p>
            </div>
        );
    }
}

export default SkillIcon;