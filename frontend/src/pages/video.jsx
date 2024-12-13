import React, { useState } from 'react';

const Video = () => {
  // State variables to manage input and video URL
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle the form submission and send request to the backend
  const handleGenerateVideo = async (e) => {
    e.preventDefault();
    if (!prompt) {
      alert('Please enter a prompt.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Sending the prompt to the backend API to generate the video
      const response = await fetch('http://localhost:5000/generate-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate video');
      }

      // Assuming the backend returns the video URL
      const data = await response.json();
      setVideoUrl(data.videoUrl); // Set the video URL in the state
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen "> {/* Centered container */}
      <h1 className="text-2xl font-semibold text-center mb-4">Generate Video from Prompt</h1>
      
      <form onSubmit={handleGenerateVideo} className="mb-4 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-lg">Enter your prompt:</label>
          <textarea
            id="prompt"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a prompt to generate a video"
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full py-2 bg-blue-500 text-white rounded-md"
          disabled={loading}
        >
          {loading ? 'Generating Video...' : 'Generate Video'}
        </button>
      </form>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {videoUrl && (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Generated Video</h2>
          <div className="relative w-64 h-64 mx-auto"> {/* Square container */}
            <video 
              width="100%" 
              height="100%" 
              controls 
              className="absolute inset-0 object-cover rounded-md"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
