import React from 'react';

const Contact = () => {
    return (
        <div id='contact-me' >
            <h1 className='text-2xl font-bold mt-10'>Contact Me</h1>
            <form className='w-1/2 mx-auto my-8 rounded-xl shadow-2xl p-6'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                </div>
                <button className='btn btn-primary mt-6 text-white'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;