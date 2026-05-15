import React from "react";
import InternshipCard from "./InternshipCard";

export default function InternshipList({ internships, loading, error }) {
  if (loading) return (
    <div className="state-box">
      <div className="spinner"></div>
      <p>Loading internships...</p>
    </div>
  );

  if (error) return <div className="state-box error">{error}</div>;

  if (internships.length === 0) return (
    <div className="state-box">
      <p>😕 No internships match your filters. Try clearing some filters.</p>
    </div>
  );

  return (
    <div className="internship-list">
      {internships.map((item) => (
        <InternshipCard key={item.id || Math.random()} internship={item} />
      ))}
    </div>
  );
}