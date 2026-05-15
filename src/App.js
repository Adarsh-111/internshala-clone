import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import InternshipList from "./components/InternshipList";
import { useInternships } from "./hooks/useInternships";
import { applyFilters } from "./utils/filters";
import "./index.css";

const DEFAULT_FILTERS = { profile: "", location: "", duration: "", stipend: "" };

export default function App() {
  const { data, loading, error } = useInternships();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const filtered = useMemo(
    () => applyFilters(data, filters),
    [data, filters]
  );

  return (
    <div className="app">
      <Header count={filtered.length} />
      <main className="main-layout">
        <FilterPanel
          filters={filters}
          onChange={setFilters}
          onClear={() => setFilters(DEFAULT_FILTERS)}
        />
        <InternshipList internships={filtered} loading={loading} error={error} />
      </main>
    </div>
  );
}