import React from 'react';
import { useState } from 'react'

import Alert from "../component/global/Alert"

//importing css
import '../index.css'



export default function Contact() {
    const [person, setPerson] = useState({ id: '', title: "", email: '', comment: '' })
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });




    const changeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setPerson({ ...person, id: new Date().getTime().toString(), [name]: value })


    }


    const submitHandler = (e) => {
        e.preventDefault();
        if (person.email && person.comment && person.title) {
            showAlert(true, `Hello ${person.title} !, your message have been received `, "success")
        }
        else {
            showAlert(true, "please fill the form", "danger")

        }
        setPerson({ title: "", email: '', comment: '' })
    }


    const showAlert = (show, msg, type) => {
        setAlert({ show, msg, type })
    }



    return (
        <section className="contact">
            <div className='contact_container'>

                <aside className='contact_title'>
                    <div className='title'>
                        <h1>Get in</h1>
                        <h1>touch</h1>
                    </div>
                    <div className='info'>
                        <p>currently, seeking an opportunity as a react based front end web developer.</p>
                    </div>
                </aside>
                <article className='contact_form_container'>

                    <form className='contact_form' onSubmit={(e) => submitHandler(e)}>
                        <label htmlFor='title'>Name</label>
                        <input id='title' name='title'
                            onChange={(e) => changeHandler(e)}
                            value={person.title}></input>

                        <label htmlFor='email'>Email</label>
                        <input id='email' name='email'
                            onChange={(e) => changeHandler(e)} value={person.email} ></input>

                        <label htmlFor='comment'>comment</label>
                        <textarea id="comment" maxLength={100} rows={1}  name='comment'
                            onChange={(e) => changeHandler(e)} value={person.comment}></textarea>

                        <button type='submit' className='btn'>
                            submit
                        </button>
                    </form>
                    {alert.show && <Alert person={person} showAlert={showAlert} {...alert} />}
                </article>

            </div>
        </section>
    )
}