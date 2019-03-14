import React from "react";
import './scrollingPage.css';

class scrollingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: 0,
            faceClassName: "face1",
            pictures: ["face1", "face2", "face3", 'face4', 'face5', "face6", 'face7', 'face8', 'face9', 'face10', "face11"],
            objectOpacity: 0
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
            this.setState({

            });
        }
        else if (scrollNum > 16.67 && scrollNum < 33.34) {
            this.setState({

            });

        }
        else if (scrollNum > 33.34 && scrollNum < 50) {
            this.setState({

            });

        }
        else if (scrollNum > 50 && scrollNum < 66.67) {
            this.setState({

            });

        }
        else if (scrollNum > 66.67 && scrollNum < 83.67) {
            this.setState({

            });

        }
        else if (scrollNum > 83.67 && scrollNum < 99) {
            this.setState({

            });

        }
        else if (scrollNum === 100) {
            this.setState({

                objectOpacity: 1
            });

        }
    }



    render() {

        return (
            <div>
                {this.state.pictures ?

                        this.state.pictures.map(function (item, i) {
                            return <div key={i} className={item} id="scrolling-page-background-main"></div>
                        })
                    
                    :


                    <h1>LOADING...</h1>}

                <div className="scrolling-page-welcome-message" style={{ opacity: this.state.objectOpacity }}>Hello Bitches</div>
                <div className="whitespace"></div>

            </div>
        )
    }
};

export default scrollingPage;