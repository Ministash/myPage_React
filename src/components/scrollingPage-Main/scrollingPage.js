import React from "react";
import './scrollingPage.css';

class scrollingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           windowHeight: 0,
           faceClassName: "face1",
           pictures: ['https://i.imgur.com/YMwllGF.jpg', 'https://i.imgur.com/yhgNGRl.jpg', 'https://i.imgur.com/E0D45E0.jpg', 'https://i.imgur.com/g1QDJVj.jpg', 'https://i.imgur.com/M3JrnaZ.jpg', 'https://i.imgur.com/NLjphCE.jpg'],
           objectOpacity: 0
        };
    }

    componentDidMount(){
        this.state.pictures.forEach((picture) => {
            const img = new Image();
            img.src = picture.fileName;
        });

            window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll = () =>{
        let winScroll = document.documentElement.scrollTop;

        let winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        let scrolled = Math.round((winScroll / winHeight) * 100);

        this.imageAppend(scrolled);
    }


    imageAppend = (scrollNum) =>{
        let images = ["face1", "face2", "face3", 'face4', 'face5', "face6", 'face7', 'face8', 'face9', 'face10', "face11"];

        if (scrollNum < 16.67) {
            this.setState({
                faceClassName: images[0]
            });
        }
        else if (scrollNum > 16.67 && scrollNum < 33.34) {
            this.setState({
                faceClassName: images[2]
            });
           
        }
        else if (scrollNum > 33.34 && scrollNum < 50) {
            this.setState({
                faceClassName: images[4]
            });
           
        }
        else if (scrollNum > 50 && scrollNum < 66.67) {
            this.setState({
                faceClassName: images[6]
            });
        
        }
        else if (scrollNum > 66.67 && scrollNum < 83.67) {
            this.setState({
                faceClassName: images[7]
            });
           
        }
        else if (scrollNum > 83.67 && scrollNum < 99) {
            this.setState({
                faceClassName: images[7]
            });
            
        }
        else if (scrollNum === 100) {
            this.setState({
                faceClassName: images[10],
                objectOpacity: 1
            });
            
        } 
    }



    render() {

        return (
            <div>
                <div className={this.state.faceClassName} id="scrolling-page-background-main"></div>
                <div className="scrolling-page-welcome-message" style={{opacity: this.state.objectOpacity}}>Hello Bitches</div>
                <div className="whitespace"></div>

            </div>
        )
    }
};

export default scrollingPage;