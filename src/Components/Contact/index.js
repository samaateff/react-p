import React from 'react';
import {ContactSection,ContactTitle,Span,Form,FormInput,InputText,InputEmail,InputExp,TextArea,Input,InputSubmit} from './style.js'

import Footer from './../Footer'
const Contact = () => {
    return (
        <React.Fragment>
      <ContactSection>
            <div className="container">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputExp type="text" className="sub" placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSection>
        <Footer />
        </React.Fragment>
    )
}


export default Contact;
/*
create from web new repository
git init
git add -
git commit -m "create project"
el masar el gay mn el mwq3
git remote add origin https://github.com/samaateff/react-p.git
git push origin master
b3d keda nro7 file pachage.json
ndef "homepage":"https://samaateff.github.io/React-p",


*/