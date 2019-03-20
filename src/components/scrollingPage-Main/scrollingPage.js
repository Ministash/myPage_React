import React from "react";
import './scrollingPage.css';

class scrollingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            windowHeight: 0,
            currentBreakingPointNum: 17,
            lastBreakingPointNum: 17,
            scrollingBarWidth: "0%",
            didItFlash: false,

            pictures: ["face1", "face3", 'face5', 'face7', 'face9', 'face10', "face11"],
            currentFace: 'face1',

            objectOpacity: 0,
            transitionOp: 0,

        };
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.animationFunction();
    }


    handleScroll = () => {
        let winScroll = document.documentElement.scrollTop;

        let winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        let scrolled = Math.round((winScroll / winHeight) * 100);

        this.imageAppend(scrolled);
        this.animationFunction(scrolled);

        this.setState({ scrollingBarWidth: scrolled + "%" });
    }

    imageAppend = (scrollNum) => {

        if (scrollNum < 17) {
            this.setState({ currentFace: "face1" });
            this.setState({currentBreakingPointNum: 17});
        }

        else if (scrollNum > 17 && scrollNum < 33) {
            this.setState({ currentFace: "face3" });
            this.setState({currentBreakingPointNum: 33});

        }
        else if (scrollNum > 33 && scrollNum < 50) {
            this.setState({ currentFace: "face5" });
            this.setState({currentBreakingPointNum: 50});

        }
        else if (scrollNum > 50 && scrollNum < 67) {
            this.setState({ currentFace: "face7" });
            this.setState({currentBreakingPointNum: 67});
        }
        else if (scrollNum > 67 && scrollNum < 84) {
            this.setState({ currentFace: "face9" });
            this.setState({currentBreakingPointNum: 84});

        }
        else if (scrollNum > 84 && scrollNum < 99) {
            this.setState({ currentFace: "face10" });
            this.setState({currentBreakingPointNum: 99});
            this.setState({
                objectOpacity: 0
            });

        }
        else if (scrollNum === 100) {
            this.setState({ currentFace: "face11" });
            this.setState({
                objectOpacity: 1
            });

        }
    }

    clickFunction = (e) => {
        e.preventDefault();

        if (this.state.objectOpacity === 1) {
            console.log("I am ready to click!");
        } else {

        }
    }

    animationFunction = (scrollNum) => {


        if (scrollNum === this.state.currentBreakingPointNum && this.state.didItFlash === false) {
            this.setState({ didItFlash: true });
            this.setState({lastBreakingPointNum: this.state.currentBreakingPointNum});
        }

        let lastNum = this.state.lastBreakingPointNum;
        let currentNum = this.state.currentBreakingPointNum;
        console.log(lastNum);
        console.log(currentNum);

        // if(lastNum === currentNum){
        //     this.setState({ didItFlash: false });
        //    console.log("hello");    
        // }else{
        //     console.log("its the same so nothing is going on");
        // }
    }



    render() {


        return (
            <div className="encompassing-wrapper">

                <div className="scrolling-page-image-wrapper">
                    <div className="scrolling-page-bar">
                        <div className="scrolling-page-bar-indicator" style={{ width: this.state.scrollingBarWidth }}></div>
                    </div>
                    <div className="scrolling-page-transition-item" style={{ opacity: this.state.transitionOp }}></div>
                    {this.state.pictures.map((item, i) => {
                        if (this.state.currentFace === item) {
                            return <div key={i} className={item} style={{ opacity: 1 }} id="scrolling-page-background-main"></div>
                        }
                        return <div key={i} className={item} style={{ opacity: 0 }} id="scrolling-page-background-main"></div>
                    })}


                </div>

                <div className="scrolling-page-welcome-message" style={{ opacity: this.state.objectOpacity }} onClick={this.clickFunction}>
                    <div className="scroll-page-welcome-message-text">Enter Website</div>
                </div>
                <div className="whitespace"></div>

            </div>
        )
    }
};

export default scrollingPage;