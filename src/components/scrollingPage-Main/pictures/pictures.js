import React from "react";
import './pictures.css';

class pictures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            importedCurrentFace: this.props.currentFace,
            importedPictures: this.props.pictures,
            transitionOp: 0,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.didSomethingChange(nextProps);
        this.setState({ importedCurrentFace: nextProps.currentFace });
    }

    didSomethingChange(nextProps) {
        if (this.state.importedCurrentFace === nextProps.currentFace) {
            //do nothing
        } else {
            this.setState({ transitionOp: 1 });
            this.theFlash();
        }
    }

    theFlash(){
        setTimeout(() => {
            this.setState({ transitionOp: 0 });
        }, 400);
    }

    render() {

        return (

            <div>
                <div className="scrolling-page-transition-item" style={{ opacity: this.state.transitionOp }}></div>
                {this.state.importedPictures.map((item, i) => {
                    if (this.state.importedCurrentFace === item) {
                        return <div key={i} className={item} style={{ opacity: 1 }} id="scrolling-page-background-main"></div>
                    }
                    return <div key={i} className={item} style={{ opacity: 0 }} id="scrolling-page-background-main"></div>
                })}
            </div>
        )
    }
};

export default pictures;