import React ,{useState} from "react";
import "./training.css";

const Training = ()=>{
    const [btn, setbtn] = useState(false);
    const hideBtn= ()=>{
        setbtn(!btn)
    }
    return(
        <>
        <section className="training-main">
            <div className="training-container">
                <div className="training-content">
                    <h2>TRAINING</h2>
                    <div className="training-images">
                        <div className="training-image">
                            <img src={require('../../assets/t1.gif')} alt="AI" />
                            <h1>figure-1</h1>
                        </div>
                        <div className="training-image">
                            <img src={require('../../assets/t2.gif')} alt="AI" />
                            <h1>figure-2</h1>
                        </div>
                        <div className="training-image">
                            <img src={require('../../assets/manage-the-risks.gif')} alt="AI" />
                            <h1>figure-3</h1>
                        </div>
                        <div className="training-image">
                            <img src={require('../../assets/t29.gif')} alt="AI" />
                            <h1>figure-4</h1>
                        </div>
                        <div className="training-image">
                            <img src={require('../../assets/t5.gif')} alt="AI" />
                            <h1>figure-5</h1>
                        </div>
                        <div className="training-image">
                            <img  src={require('../../assets/t6.gif')} alt="AI" />
                            <h1>figure-6</h1>
                        </div>
                        <div className="training-image">
                            <img src={require('../../assets/slider6.jpg')} alt="AI" />
                            <h1>figure-7</h1>
                        </div>
                        <div className="training-image">
                            <img src={require('../../assets/t12.gif')} alt="AI" />
                            <h1>figure-8</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="video-main">
            <div className="video-container">
                <div className="video-content">
                    <h2>ARTIFICIAL INTELLIGENCE</h2>
                    <video src={require('../../assets/video1.mp4')} className="video" controls></video>
                    { !btn ? <button onClick={hideBtn}>PLAY</button> :
                    <button onClick={hideBtn}> STOP</button> }
                </div>
            </div>

        </section>
        </>
    )
}

export default Training;