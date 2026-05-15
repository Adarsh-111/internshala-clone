import React from "react";

export default function InternshipCard({ internship }) {
  const {
    profile_name,
    company_name,
    location_names,
    duration,
    stipend,
    is_remote,
    apply_by,
    application_deadline,
    actively_hiring,
    start_date,
    logo,
  } = internship;

  const salary = stipend?.salaries?.[0]?.salary;

  const stipendText =
    salary && parseInt(salary) > 0
      ? `₹${parseInt(salary).toLocaleString()}/month`
      : "Unpaid";

  const locations = location_names?.join(", ") || "Remote";

  return (
    <div className={`card ${actively_hiring ? "actively-hiring" : ""}`}>
      {actively_hiring && (
        <span className="badge-hiring">Actively Hiring</span>
      )}

      <div className="card-top">
        <div className="card-info">
          <h3 className="card-title">{profile_name}</h3>

          <p className="card-company">{company_name}</p>
        </div>

        <div className="card-logo">
          {logo ? (
            <img src={logo} alt={company_name} />
          ) : (
            <div className="logo-placeholder">
              {company_name?.[0]}
            </div>
          )}
        </div>
      </div>

      <div className="card-tags">
        {is_remote && (
          <span className="tag tag-remote">
            🌐 Remote
          </span>
        )}

        <span className="tag">
          📍 {locations}
        </span>

        <span className="tag">
          ⏱ {duration}
        </span>

        <span className="tag">
          💰 {stipendText}
        </span>

        <span className="tag">
          🗓 Start: {start_date || "Immediately"}
        </span>
      </div>

      <div className="card-footer">
        <span className="apply-by">
          Apply by:{" "}
          {apply_by ||
            application_deadline ||
            "Immediately"}
        </span>

        <button className="apply-btn">
          Apply Now
        </button>
      </div>
    </div>
  );
}