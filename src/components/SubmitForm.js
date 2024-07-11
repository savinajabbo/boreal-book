import React, { useState } from 'react';
import { saveSubmission } from '../utils/db';

const SubmitForm = ({ onSubmission }) => {
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onload = async () => {
      const submission = {
        photo: reader.result,
        caption: caption,
        timestamp: new Date().toISOString(),
      };

      await saveSubmission(submission);
      setPhoto(null);
      setCaption('');
      alert('Submission saved locally!');
      if (onSubmission) onSubmission();
    };
    reader.readAsDataURL(photo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} required />
      <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Caption" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitForm;
