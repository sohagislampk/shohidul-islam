import React from 'react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';

const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const PUBLIC_KEY = process.env.PUBLIC_KEY;


const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <div id='contact-me' >
            <h1 className='text-2xl font-bold mt-10'>Contact Me</h1>
            <form onSubmit={handleSubmit} className='w-1/2 mx-auto my-8 rounded-xl shadow-2xl p-6'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='from_name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name='from_email' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <textarea className="textarea textarea-bordered" type="text" name='message' placeholder="Your Message"></textarea>
                </div>
                <button type='submit' className='btn btn-primary mt-6 text-white'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;