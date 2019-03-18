import React from "react";
import './scrollingPage.css';

class scrollingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: 0,
            pictures: ["face1", "face3", 'face5', 'face7', 'face9', 'face10', "face11"],
            objectOpacity: 0,
            currentFace: 'face1'
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
    }


    imageAppend = (scrollNum) => {

        if (scrollNum < 16.67) {
            this.setState({ currentFace: "face1" });
        }

        else if (scrollNum > 16.67 && scrollNum < 33.34) {
            this.setState({ currentFace: "face3" });

        }
        else if (scrollNum > 33.34 && scrollNum < 50) {
            this.setState({ currentFace: "face5" });

        }
        else if (scrollNum > 50 && scrollNum < 66.67) {
            this.setState({ currentFace: "face7" });
        }
        else if (scrollNum > 66.67 && scrollNum < 83.67) {
            this.setState({ currentFace: "face9" });

        }
        else if (scrollNum > 83.67 && scrollNum < 99) {
            this.setState({ currentFace: "face10" });

        }
        else if (scrollNum === 100) {
            this.setState({ currentFace: "face11" });
            this.setState({
                objectOpacity: 1
            });

        }
    }



    render() {

        return (
            <div>

                <div className="scrolling-page-image-wrapper">

                    {this.state.pictures.map((item, i) => {
                        if (this.state.currentFace === item) {
                            return <div key={i} className={item} style={{ opacity: 1 }} id="scrolling-page-background-main"></div>
                        }
                        return <div key={i} className={item} style={{ opacity: 0 }} id="scrolling-page-background-main"></div>
                    })}


                </div>

                <div className="scrolling-page-welcome-message" style={{ opacity: this.state.objectOpacity }}>Hello Bitches</div>
                <div className="whitespace"></div>

            </div>
        )
    }
};

export default scrollingPage;