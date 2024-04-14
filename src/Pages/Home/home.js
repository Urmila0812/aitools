import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import React ,{useState} from "react";
import './home.css';
import facescan from "../../assets/facescan.gif";
import faceman from "../../assets/faceman.gif";

import img1 from "../../assets/slider1.gif";
import img2 from "../../assets/slider2.gif";
import img3 from "../../assets/slider3.gif";
import img4 from "../../assets/slider4.webp";
import img5 from "../../assets/slider5.jpg";
import img6 from "../../assets/slider6.jpg";
import img7 from "../../assets/slider7.jpg";
import img8 from "../../assets/slider8.webp";
import img9 from "../../assets/slider9.jpg";


import '../../slick.css'




function Home (){
    const [aiImage, setAiImage]  = useState(facescan);
    const [shouldHide, setBtnHide] =  useState(false);
    const hideBtn = () =>{
        if(shouldHide){
            setAiImage(facescan);
            setBtnHide(false);
        }else{
            setAiImage(faceman);
            setBtnHide(true);
        }
    }

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    const [faq, setfaq] = useState(false)
    const showfaq = () =>{
        setfaq(!faq)
    }

    const [faqone, setfaqone] = useState(false)
    const showfaqone = () =>{
        setfaqone(!faqone)
    }


    const [faqtwo, setfaqtwo] = useState(false)
    const showfaqtwo = () =>{
        setfaqtwo(!faqtwo)
    }
    return(
        <>
        <section className="images-main">
            <div className="images-container">
                <div className="images">
                    <img className="img" src={require('../../assets/brain.webp')} alt="deeplearning" />
                    <img className="img1" src={require('../../assets/alexey.gif')} alt="deeplearning" />
                </div>
            </div>
        </section>
        <section className="ai-scan-main">
            <div className="ai-scan-container">
                <div className="ai-scan-content">
                    <h3>ARTIFICIAL INTELLIGENCE</h3>
                    <img src={aiImage} alt={aiImage} />
                    <button className={shouldHide? 'hidden' : ''} onClick={hideBtn}>Face Recognition</button>
                    <button className={shouldHide? '' : 'hidden'} onClick={hideBtn}> Done</button>
                </div>
            </div>
        </section>
        <section className="ai-main">
            <div className="ai-container">
                <div className="ai-content">
                    <img className="img" src={require('../../assets/AI_gif.gif')} alt="AI" />
                    <div className="ai-content-text">
                        <div className="ai-text">
                            <h3>Introduction of AI</h3>
                            <p>Artificial intelligence allows machines to replicate the capabilities of the human mind. From the development of self-driving cars to the proliferation of smart assistants like Siri and Alexa, AI is a growing part of everyday life. As a result, many tech companies across various industries are investing in artificially intelligent technologies.</p>
                        </div>
                        <div className="ai-text">
                            <h3>WHAT IS ARTIFICIAL INTELLIGENCE</h3>
                            <p>Artificial intelligence is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="history-main">
            <div className="history-container">
                <div className="history-content">
                    <h3>HISTORY OF AI</h3>
                    <img className="img" src={require('../../assets/inside_the_blockchain.gif')} alt="AI" />
                    <h3>A brief history of artificial intelligence</h3>
                    <p>Before 1949, computers could execute commands, but they could not remember what they did as they were not able to store these commands. In 1950, Alan Turing discussed how to build intelligent machines and test this intelligence in his paper “Computing Machinery and Intelligence”. Five years later, the first AI program was presented at the Dartmouth Summer Research Project on Artificial Intelligence (DSPRAI). This event was the catalyst for AI research for the next few decades. Computers became faster, cheaper and more accessible between 1957 and 1974. Machine learning algorithms improved and, in 1970, one of the hosts of DSPRAI told Life Magazine that there would be a machine with the general intelligence of an average human being in three to eight years.</p>
                </div>
            </div>
        </section>
        <section className="slider-main">
            <h1 className="header">Services</h1>
            <div className="slider-container">
                <Slider {...settings}>
                    <div >
                        <img  src={img1} className="slider1" alt="slider1"  />
                    </div>
                    <div className='div'>
                        <img  src={img2} className="slider2" alt="slider1" />
                    </div>
                    <div>
                        <img  src={img3} className="slider1" alt="slider1" />
                    </div>
                    <div>
                        <img  src={img4} className="slider1" alt="slider1" />
                    </div>
                    {/* <div>
                        <img  src={img5} className="slider1" alt="slider1" />
                    </div>
                    <div>
                        <img  src={img6} className="slider1" alt="slider1" />
                    </div>
                    <div>
                        <img  src={img7} className="slider1" alt="slider1" />
                    </div>
                    <div>
                        <img  src={img8} className="slider1" alt="slider1" />
                    </div>
                    <div>
                        <img  src={img9} id="slider1" alt="slider1" />
                    </div> */}
                </Slider>
            </div>
        </section>
        <section className="faq-main">
            <div className="faq-container">
                <div className="faq-content">
                    <h1>FAQs</h1>
                
                
                   <div className="faq-box">
                       <div className="faq-question">
                            <h3>1. What is an AI?</h3>
                            <img className={faq ? "rotate-faq-img":"faq-img"} src={require('../../assets/arrow.jpg')} alt="arrow" onClick={showfaq}/>
                        </div>
                        { faq ? <div className="faq-ans">
                            <p>AI is an Artificial intelligence. it is computer science technology that emphasizes creating intelligent machine that can mimic human behavior. Here Intelligent machines can be defined as the machine that can behave like a human, think like a human, and also capable of decision making. It is made up of two words, 'Artificial' and 'Intelligence,' which means the 'man-made thinking ability.</p>
                        </div> : ''}
                   </div>

                   <div className="faq-box">
                    <div className="faq-question">
                        <h3>2. Why do we need AI?</h3>
                        <img className={faqone ? "rotate-faq-img":"faq-img"} src={require('../../assets/arrow.jpg')} alt="arrow" onClick={showfaqone}/>
                    </div>
                    { faqone ? <div className="faq-ans">
                            <p>AI is an Artificial intelligence. it is computer science technology that emphasizes creating intelligent machine that can mimic human behavior. Here Intelligent machines can be defined as the machine that can behave like a human, think like a human, and also capable of decision making. It is made up of two words, 'Artificial' and 'Intelligence,' which means the 'man-made thinking ability.</p>
                        </div> : ''}
                   </div>

                   <div className="faq-box">
                        <div className="faq-question">
                            <h3>3. How is ML related to AI?</h3>
                            <img className={faqtwo ? "rotate-faq-img":"faq-img"}src={require('../../assets/arrow.jpg')} alt="arrow"onClick={showfaqtwo}/>
                        </div>
                        { faqtwo ? <div className="faq-ans">
                            <p>AI is an Artificial intelligence. it is computer science technology that emphasizes creating intelligent machine that can mimic human behavior. Here Intelligent machines can be defined as the machine that can behave like a human, think like a human, and also capable of decision making. It is made up of two words, 'Artificial' and 'Intelligence,' which means the 'man-made thinking ability.</p>
                        </div> : ''}
                   </div>
                   
                        
               <div className="faq-footer">
                   <h3>How can we help?</h3>
                   <input type="text" placeholder="Help me find something"/>
                   <button className="faq-btn">Search</button>
               </div>
               </div>
            </div>
        </section>
        
        </>
    )
}

export default Home;