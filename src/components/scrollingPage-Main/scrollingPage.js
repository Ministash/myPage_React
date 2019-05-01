import React from "react";
import './scrollingPage.css';
import Pictures from './pictures/index';

class scrollingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            windowHeight: 0,
            scrollingBarWidth: "0%",
            pictures: ["face1", "face3", 'face5', 'face7', 'face9', 'face10', "face11"],
            currentFace: 'face1',
            objectOpacity: 0,
            cursor: "initial",

        };
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let winScroll = document.documentElement.scrollTop;

        let winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        let scrolled = Math.round((winScroll / winHeight) * 100);

        this.imageAppend(scrolled);

        this.setState({ scrollingBarWidth: scrolled + "%" });
    }

    imageAppend = (scrollNum) => {

        if (scrollNum < 17) {
            this.setState({ currentFace: "face1" });
        }

        else if (scrollNum > 17 && scrollNum < 33) {
            this.setState({ currentFace: "face3" });

        }
        else if (scrollNum > 33 && scrollNum < 50) {
            this.setState({ currentFace: "face5" });

        }
        else if (scrollNum > 50 && scrollNum < 67) {
            this.setState({ currentFace: "face7" });
        }
        else if (scrollNum > 67 && scrollNum < 84) {
            this.setState({ currentFace: "face9" });

        }
        else if (scrollNum > 84 && scrollNum < 99) {
            this.setState({ currentFace: "face10" });
            this.setState({objectOpacity: 0});
            this.setState({cursor: 'initial'});

        }
        else if (scrollNum === 100) {
            this.setState({ currentFace: "face11" });
            this.setState({objectOpacity: 1});
            this.setState({cursor: 'pointer'});

        }
    }

    clickFunction = (e) => {
        e.preventDefault();

    }

    render() {


        return (
            <div className="encompassing-wrapper">

                <div className="scrolling-page-image-wrapper">
                    <div className="scrolling-page-bar">
                        <div className="scrolling-page-bar-indicator" style={{ width: this.state.scrollingBarWidth }}></div>
                    </div>
                    <Pictures currentFace={this.state.currentFace} pictures={this.state.pictures}/>
                </div>

                <div className="scrolling-page-welcome-message x" style={{ opacity: this.state.objectOpacity, cursor: this.state.cursor}} onClick={this.clickFunction}>
                    <div className="scroll-page-welcome-message-text">Enter Website</div>
                </div>
                <div className="whitespace"></div>

            </div>
        )
    }
};

export default scrollingPage;