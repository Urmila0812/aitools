import './contact.css'

function Contact(){
    return(
        <>
        <section className="contact-main">
            <div className="contact-container">
                <h1>CONTACT US</h1>
                <form>
                    <div className="field">
                        <p>Name</p>
                        <input type ="text" placeholder="Enter Your Name"/>
                    </div>
                    <div className="field">
                        <p>Email</p>
                        <input type ="Email" placeholder="Enter Your Email id"/>
                    </div>
                    <div className="field">
                        <p>Phone Number</p>
                        <input type ="tel" placeholder="Enter Your Phone number"/>
                    </div>
                    
                </form>
                <div>
                        <button className = "form-btn">Submit</button>
                    </div>


                </div>
        </section>
        </>
    )
}

export default Contact;