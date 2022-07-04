import React from 'react';
import { BsDownload } from 'react-icons/bs';
import '../../style/dist/min/listsection.min.css';

const ListSections = ({ title, description, device, video, reverse, type }) => {
    return (
        <div className='list-section-container'>
            <div className={`list-section-wrapper ${reverse && 'reverse'}`}>
                <div className='left-side'>
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                </div>

                <div className='picture' style={{ left: type === 'phone' ? '-140px' : '0' }}>
                    <img src={device} alt='' />

                    {type === 'phone' ? (
                        <div className='stranger-things'>
                            <img
                                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
                                alt=''
                            />

                            <div className='title'>
                                <h4>Stranger Things</h4>
                                <span>Downloading...</span>
                            </div>

                            <BsDownload className='icon' />
                        </div>
                    ) : null}

                    <video autoPlay loop playsInline muted className={type === 'apple' && 'apple'}>
                        <source src={video} type='video/mp4'></source>
                    </video>
                </div>
            </div>
        </div>
    );
};

export default ListSections;
