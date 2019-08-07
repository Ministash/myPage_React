import React from "react";
import Pictures from "../pictures/index";

class StartingPageDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passedLogic: this.props.passedProps
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({passedLogic: nextProps.passedLogic});
    }



    render() {
        console.log(this.state.passedLogic);

        return (

                <div className="encompassing-wrapper">

                    <div className="scrolling-page-image-wrapper">
                        <div className="scrolling-page-bar">
                            <div className="scrolling-page-bar-indicator" style={{ width: this.state.passedLogic.scrollingBarWidth }}></div>
                        </div>
                        <Pictures currentFace={this.state.passedLogic.currentFace} pictures={this.state.passedLogic.pictures} />
                    </div>

                    <div className="scrolling-page-welcome-message x" style={{ opacity: this.state.passedLogic.objectOpacity, cursor: this.state.passedLogic.cursor }} onClick={this.nextPageFunction}>
                        <div className="scroll-page-welcome-message-text">Enter Website</div>
                    </div>

                    <div className="scrolling-page-arrow-wrapper">
                        <div className="scrolling-page-arrow-circle">
                            <div className="scroll-it-arrow"></div>
                        </div>
                    </div>

                    <div className="whitespace" style={{ height: this.state.passedLogic.pageHeight }}></div>

                </div>
        )
    }
};

export default StartingPageDiv;