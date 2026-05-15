import React from "react";

export default function FilterPanel({
  filters,
  onChange,
  onClear,
}) {
  const handleChange = (key) => (e) => {
    onChange({
      ...filters,
      [key]: e.target.value,
    });
  };

  return (
    <aside className="filter-panel">
      <div className="filter-header">
        <h3>Filters</h3>

        <button
          className="clear-btn"
          onClick={onClear}
        >
          Clear all
        </button>
      </div>

      {/* PROFILE */}

      <div className="filter-group">
        <label>Profile</label>

        <input
          type="text"
          placeholder="e.g. Web Development"
          value={filters.profile}
          onChange={handleChange("profile")}
        />
      </div>

      {/* LOCATION */}

      <div className="filter-group">
        <label>Location</label>

        <input
          type="text"
          placeholder="e.g. Delhi"
          value={filters.location}
          onChange={handleChange("location")}
        />
      </div>

      {/* DURATION */}

      <div className="filter-group">
        <label>Duration</label>

        <select
          value={filters.duration}
          onChange={handleChange("duration")}
        >
          <option value="">
            Any Duration
          </option>

          <option value="1-3">
            1–3 Months
          </option>

          <option value="3-6">
            3–6 Months
          </option>

          <option value="6+">
            6+ Months
          </option>
        </select>
      </div>

      {/* STIPEND */}

      <div className="filter-group">
        <label>Stipend</label>

        <select
          value={filters.stipend}
          onChange={handleChange("stipend")}
        >
          <option value="">
            Any Stipend
          </option>

          <option value="0">
            Unpaid
          </option>

          <option value="1-5000">
            ₹1 – ₹5,000
          </option>

          <option value="5000-10000">
            ₹5,000 – ₹10,000
          </option>

          <option value="10000+">
            ₹10,000+
          </option>
        </select>
      </div>
    </aside>
  );
}