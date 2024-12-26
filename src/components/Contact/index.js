import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import {Loader} from 'react-loaders';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm('service_hhtog1f', 'template_3zds2k4', form.current, 'HJZDPIImNoHzS068E')
        .then(
            () => {
                alert('Message succesfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send he message, please try again')
            }
        )
    } 
    
    return (
        
<>
<div className='container contact-page'>
<div className='text-zone'>
    <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={["C",'o','n','t','a','c','t',' ','m','e']}
        idx={15}
        />
    </h1>
    <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
        <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
                <ul>
                <li className='half'>
                    <input type='text' name='name' placeholder='Name' required />
                    </li> 
                    <li className='half'>
                    <input type='email' name='email' placeholder='E-Mail' required />
                    </li>
                    <li>
                        <input  placeholder="Subject" type="text" name="subject" required/> 
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>
                    </li>
                    <li>
                        <input type='submit' className='flat-button' value="SEND" />
                    </li>
                </ul>
            </form>
        </div>
</div>
<div className='info-map'>
    Luca Paglia,
    <br />
    Denmark,
    <br />
    Bibliotekvej 60, 2650 <br />
    Copenhagen <br />
    <span>lucaapaglia@gmail.com</span>
</div>
<div className='map-wrap'>
    <MapContainer center={[55.64110918587483, 12.468601563642144]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[55.64110918587483, 12.468601563642144]}>
                <Popup>Luca lives here, come over for a cup of coffee :)</Popup>
            </Marker>
        </MapContainer>
</div>
</div>
<Loader type="pacman" />
</>
    )
}

export default Contact