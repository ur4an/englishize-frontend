import { useEffect, useState } from 'react';

export const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/submissions')
      .then((res) => res.json())
      .then((data) => setSubmissions(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h1>Admin Panel - Submissions</h1>
      <ul>
        {submissions.map((sub) => (
          <li key={sub.id}>{sub.name} - {sub.email}</li>
        ))}
      </ul>
    </div>
  );
};
export default AdminPanel;