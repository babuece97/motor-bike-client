import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
  <>
    <h1 className="mission-header"> Our Followers </h1>
    <div>
         <section className="statusBar">
        

        <div className="statusMain">
            <div className="status1">
                <h1>120k</h1>
                <p> <a className="link-button" target="_blank" href="https://www.linkedin.com/feed/">
                        TIKTOK </a> </p>

            </div>
            <div className="status2">
                <h1>1.7m</h1>
                <p> <a className="link-button" target="_blank" href="https://www.linkedin.com/feed/">
                        INSTRAGRAM </a> </p>
            </div>
            <div className="status3">
                <h1>3400k</h1>
                <p> <a className="link-button" target="_blank" href="https://www.linkedin.com/feed/">
                        FaceBook </a> </p>
            </div>
        </div>
    </section>    
    </div>
    </>
  );
}; 

export default SocialMedia;