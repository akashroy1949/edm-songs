import '../css/aboutus.css'
import React from 'react';

function AboutUs() {
    return (
        <div className='container outer-div'>
            <div className='text-center total-body'>
                <h1 className='m-4 about-heading'>ABOUT US</h1>
                <div className=''>
                    <p className=''><a href="https://www.brightlandrecords.in" target='_blank' rel="noreferrer">Brightland Records</a>
                        &nbsp; is an Independent Record Label & Music Curator from India.
                        We provide the perfect combination & sensation of Electronic & EDM Music.
                        We provide high quality music to our listeners. &nbsp;We release music on digital streaming platforms like
                        Spotify, Apple Music, YouTube, Jiosaavn, Soundcloud & many more.
                        We got supported by Main Stage Artists like Arcando, ACUB3, Fuzzy Bear, Rebels of Society
                        , Ampsuite, Symphonic Records, Labelradar & more.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;