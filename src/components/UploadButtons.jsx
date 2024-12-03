import React, { useState } from 'react';

const UploadButtons = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));  // Update file URL for preview
  };

  return (
    <div className="upload-buttons">
      <h2>Upload Media for DeepFake Detection</h2>
      <div className="buttons">
        <button className="upload-button">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <label>Upload Image</label>
        </button>
        <button className="upload-button">
          <input
            type="file"
            accept="video/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <label>Upload Video</label>
        </button>
        <button className="upload-button">
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <label>Upload Audio</label>
        </button>
      </div>

      {file && (
        <div className="file-preview">
          <h3>File Preview:</h3>
          <p>{file}</p>
        </div>
      )}
    </div>
  );
};

export default UploadButtons;
