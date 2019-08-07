import React from "react";
import './scrollingPage.css';
import Pictures from './pictures/index';

class scrollingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            pageHeight: 20000,
            scrollingBarWidth: "0%",
            pictures: ["face1", "face3", 'face5', 'face7', 'face9', 'face10', "face11"],
            currentFace: 'face1',
            objectOpacity: 0,
            cursor: "initial",
            picturePosition: "absolute",

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
            this.setState({ objectOpacity: 0 });
            this.setState({ cursor: 'initial' });

        }
        else if (scrollNum === 100) {
            this.setState({ currentFace: "face11" });
            this.setState({ objectOpacity: 1 });
            this.setState({ cursor: 'pointer' });

        }
    }

    nextPageFunction = (e) => {
        e.preventDefault();

        this.setState({ pageHeight: '100px' });
        this.setState({ objectOpacity: 0 });
        window.removeEventListener('scroll', this.handleScroll);
        this.setState({ picturePosition: "relative" });


    }

    render() {


        return (
            <div>
                <div className="encompassing-wrapper">

                    <div className="scrolling-page-image-wrapper">
                        <div className="scrolling-page-bar">
                            <div className="scrolling-page-bar-indicator" style={{ width: this.state.scrollingBarWidth }}></div>
                        </div>
                        <Pictures currentFace={this.state.currentFace} pictures={this.state.pictures} position={this.state.picturePosition} />
                    </div>

                    <div className="scrolling-page-welcome-message x" style={{ opacity: this.state.objectOpacity, cursor: this.state.cursor }} onClick={this.nextPageFunction}>
                        <div className="scroll-page-welcome-message-text">Enter Website</div>
                    </div>

                    <div className="scrolling-page-arrow-wrapper">
                        <div className="scrolling-page-arrow-circle">
                            <div className="scroll-it-arrow"></div>
                        </div>
                    </div>

                    <div className="whitespace" style={{ height: this.state.pageHeight }}></div>

                </div>

            </div>
        )
    }
};

export default scrollingPage;