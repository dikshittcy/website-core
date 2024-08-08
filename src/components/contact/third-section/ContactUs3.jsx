import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import ServiceConfig from '../../../ServiceConfig.jsx';
import './ContactUs3.css';

const center = {
    lat:  28.578523796096338,
    lng: 77.2500933300056
};

const ContactUs3 = () => {
    return (
        <LoadScript googleMapsApiKey={ServiceConfig.googleMapsApiKey}>
            <div className="contact-us3-map-container">
                <GoogleMap
                    mapContainerClassName="contact-us3-google-map"
                    center={center}
                    zoom={15}
                >
                    <Marker position={center}/>
                </GoogleMap>
            </div>
        </LoadScript>
    );
}

export default ContactUs3;
