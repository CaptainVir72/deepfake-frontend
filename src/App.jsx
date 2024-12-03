import React, { useState } from 'react';
import './App.css';

function App() {
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [audio, setAudio] = useState(null);

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            if (type === 'image') {
                setImage(URL.createObjectURL(file));
            } else if (type === 'video') {
                setVideo(URL.createObjectURL(file));
            } else if (type === 'audio') {
                setAudio(URL.createObjectURL(file));
            }
        }
    };

    return (
        <div className="App">
            <div className="background-image-wrapper">
                <img src="/Designer.png" alt="background" className="background-image" />
                <div className="overlay"></div>
            </div>

            <header>
                <h1>Welcome to Our Deepfake Detection App</h1>
                <p className="tagline">Choose a file to analyze!</p>
                <div className="scroll-down">&#x21D3;</div>
            </header>

            <section className="features-section">
                <h2>Upload Files</h2>

                {/* Upload Buttons */}
                <div className="upload-buttons">
                    <button className="upload-btn" onClick={() => document.getElementById('image-upload').click()}>
                        Upload Image
                    </button>
                    <input
                        type="file"
                        id="image-upload"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'image')}
                    />

                    <button className="upload-btn" onClick={() => document.getElementById('video-upload').click()}>
                        Upload Video
                    </button>
                    <input
                        type="file"
                        id="video-upload"
                        style={{ display: 'none' }}
                        accept="video/*"
                        onChange={(e) => handleFileChange(e, 'video')}
                    />

                    <button className="upload-btn" onClick={() => document.getElementById('audio-upload').click()}>
                        Upload Audio
                    </button>
                    <input
                        type="file"
                        id="audio-upload"
                        style={{ display: 'none' }}
                        accept="audio/*"
                        onChange={(e) => handleFileChange(e, 'audio')}
                    />
                </div>

                {/* Display uploaded files */}
                {image && (
                    <div className="uploaded-file">
                        <h3>Uploaded Image</h3>
                        <img src={image} alt="Uploaded" className="uploaded-image" />
                    </div>
                )}
                {video && (
                    <div className="uploaded-file">
                        <h3>Uploaded Video</h3>
                        <video src={video} controls className="uploaded-video" />
                    </div>
                )}
                {audio && (
                    <div className="uploaded-file">
                        <h3>Uploaded Audio</h3>
                        <audio src={audio} controls className="uploaded-audio" />
                    </div>
                )}
            </section>

            <footer>
                <p>&copy; APEX 0110</p>
            </footer>
        </div>
    );
}

export default App;
