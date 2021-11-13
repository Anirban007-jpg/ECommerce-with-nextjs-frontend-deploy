import { useState } from 'react';
import Link from 'next/link';


const ContactForm = ({authorEmail}) => {
    const [values, setValues] = useState({
        usermessage: '',
        name: '',
        email: '',
        toemail: '',
        sent: false,
        toemail: 'abanerjee763@gmail.com',
        buttonText: 'Send Message',
        success: false,
        error: false
    });

    const { usermessage, name, email, sent, buttonText, success, error,toemail } = values;

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, buttonText: 'Sending...' });
        emailContactForm({ authorEmail, name, email, usermessage,toemail }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    sent: true,
                    name: '',
                    email: '',
                    usermessage: '',
                    buttonText: 'Sent',
                    success: data.success
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value, error: false, success: false, buttonText: 'Send Message' });
    };

    const showSuccessMessage = () => success && <div className="alert alert-info">Thank you for contacting us.</div>;

    const showErrorMessage = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const contactForm = () => {
        return (
            <form onSubmit={clickSubmit} className="pb-5">
                <div className="form-group" style={{marginLeft: '3rem', marginRight: '3rem'}}>
                    <br/><br/>
                    <label className="lead" style={{fontWeight: 'bolder', color: 'black', fontSize: '20px'}}>Message</label><br/><br/>
                    <textarea
                        onChange={handleChange('usermessage')}
                        type="text"
                        className="form-control"
                        value={usermessage}
                        required
                        rows="10"
                        style={{height: '20rem'}}
                    ></textarea>
                </div><br/>

                <div className="form-group" style={{marginLeft: '3rem', marginRight: '3rem'}}><br/><br/>
                    <label className="lead" style={{fontWeight: 'bolder', color: 'black', fontSize: '20px'}}>Name</label><br/><br/>
                    <input type="text" onChange={handleChange('name')} className="form-control" value={name} required />
                </div><br/><br/>

                <div className="form-group" style={{marginLeft: '3rem', marginRight: '3rem'}}><br/><br/>
                    <label className="lead" style={{fontWeight: 'bolder', color: 'black', fontSize: '20px'}}>Sender's Email</label><br/><br/>
                    <input
                        type="email"
                        onChange={handleChange('email')}
                        className="form-control"
                        value={email}
                        required
                    />
                </div><hr/>
                 
                <div style={{marginLeft: '3rem', marginRight: '3rem'}}>
                    <button className="btn btn-primary" style={{display: 'block', width: '100%', height: '3rem', borderRadius: '5rem'}}>{buttonText}</button>
                </div>
            </form>
        );
    };

    return (
        <>
            {showSuccessMessage()}
            {showErrorMessage()}
            {contactForm()}
        </>
    );
};

export default ContactForm;