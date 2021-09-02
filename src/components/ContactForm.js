import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import * as styles from "../styles/contact.module.css";

export default function ContactForm( ) {
  const [state, handleSubmit] = useForm("xpzkkrje");

  return <>
        <form onSubmit={handleSubmit}>
            { state.succeeded ? <h2 id={ styles.successMessage }>Hvala! Vaš upit je poslan.</h2> : <h2>Stupite u kontakt</h2> }
            <div id={ styles.formContent}>
                <label htmlFor="email">email</label>
                <input
                    id={ styles.email }
                    type="email" 
                    name="email"
                    placeholder="john.doe@gmail.com"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message">razlog javljanja</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Javljam se po pitanju..."
                    rows={ 5 }
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={ state.submitting }>Pošaljite upit</button>
            </div>
        </form>
        </>
}