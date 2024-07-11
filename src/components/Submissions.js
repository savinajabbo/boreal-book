import React, { useState, useEffect } from 'react';
import { getSubmissions } from '../utils/db';

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const submissions = await getSubmissions();
      setSubmissions(submissions);
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="submissions">
      {submissions.map(submission => (
        <div key={submission.id} className="submission">
          <img src={submission.photo} alt="Submission" />
          <p>{submission.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Submissions;
