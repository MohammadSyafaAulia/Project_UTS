const Contact = () => {
    return (
        <div>
            <div className="contact-info">
                <h1>Contact Me</h1>
                <p>Email: yayasboxing@gmail.com</p>
                <p>Phone: +62 82218584122</p>
                <p>Address: Setiabudhi, Bandung</p>
                <div className="social-icons">
                    <a href="https://twitter.com" target="_blank">
                        <img src="x-twitter.svg" alt="Twitter" />
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <img src="instagram.svg" alt="Instagram" />
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <img src="facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://github.com" target="_blank">
                        <img src="github.svg" alt="Github" />
                    </a>
                </div>
            </div>

            <div className="contact-container">
                <form>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name"/>

                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email"/>

                    <label htmlFor="message">Your Message:</label>
                    <textarea id="message" name="message" rows="4"></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
