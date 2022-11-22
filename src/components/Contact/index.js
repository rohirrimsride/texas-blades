import React from "react";

function Contact() {
    return (
        <section className="d-flex my-4 flex-column align-items-center">
            <h3 className="ps-4">Contact Us</h3>
            <form className="p-2 form-border w-50">
                <div className="d-flex flex-column">
                    <label for="email">Email*</label>
                    <input type="text" id="email" placeholder="example@company.com" />
                </div>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column py-1 pe-1 w-50">
                        <label for="firstName">First Name*</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Partridge" />
                    </div>
                    <div className="d-flex flex-column py-1 ps-1 w-50">
                        <label for="lastName">Last Name*</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Peartree" />
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <label for="message">Message*</label>
                    <textarea type="text" id="message" name="message" rows={15}></textarea>
                </div>
            </form>
        </section>
    )

}

export default Contact;