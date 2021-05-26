import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({ data }) => {

   const [successMessage, setSuccessMessage] = useState(false);
   const [goodEmail, setgoodEmail] = useState(true);
   const [email, setEmail] = useState('');
  

   const handleClick = (e) => {

      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(regexEmail)) {
         setgoodEmail(false);
         e.preventDefault();
      } else {
         e.preventDefault();
         emailjs.sendForm('service_ao0gi8r', 'port', e.target, 'user_mgpB053eN1O8gGlxZHIMa')
           .then((result) => {
               setSuccessMessage(true);
               setgoodEmail(true);
               console.log(result.text);
           }, (error) => {
               setSuccessMessage(0);
               console.log(error.text);
           });
           e.target.reset();
      }
         

      // e.preventDefault();
      // window.open(`mailto:${url}?subject=${subject}&body=${name}: ${message}`);
   }


   return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

               <p className="lead">{data?.message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
               <form id="contactForm" name="contactForm" onSubmit={handleClick}>
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" size="35" id="contactName" name="name" id="contactName" required/>
                     </div>
                     <div>
                        {goodEmail ? null : <div id="message-warning">Please enter a valid email!</div>}
                     </div>
                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" onChange={e => setEmail(e.target.value)} size="35" id="contactName" name="email" id="contactEmail" required/>
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Subjectt</label>
                        <input type="text" size="35" id="contactName" name="subject" id="contactSubject"/>
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea style={{ resize: 'none' }} cols="50" rows="15" id="contactMessage" name="message" required></textarea>
                     </div>

                     <div>
                     {successMessage ? <div id="message-success"><i className="fa fa-check">Email has been received!</i> </div>: null}
                     {successMessage === 0 ? <div id="message-warning">There was an error, please try again.</div>: null}
                        <button type='submit' className="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>
                  
                  

                  


                  
            </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>Address and Phone</h4>
                  <p className="address">
                     {data?.name}<br />
                     {data?.address.street} <br />
                     {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
                     <span>{data?.phone}</span>
                  </p>
               </div>

               <div className="widget widget_tweets">
                  
               </div>
            </aside>
         </div>
      </section>
   );
}

export default Contact;