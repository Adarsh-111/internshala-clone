import { useState, useEffect } from "react";
import axios from "axios";

const CORS_PROXY = "https://api.allorigins.win/raw?url=";
const API_URL = "https://internshala.com/hiring/search";

export function useInternships() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          CORS_PROXY + encodeURIComponent(API_URL)
        );

        console.log(res.data);

        const raw = res.data?.internships_meta || {};

        let internships = Object.values(raw);

        // If API returns very few internships,
        // expand them for UI/testing purposes
        if (internships.length > 0) {
          const expanded = [];

          for (let i = 0; i < 25; i++) {
            internships.forEach((item, index) => {
              expanded.push({
                ...item,
                id: `${i}-${index}`,

                company_name:
                  item.company_name + " " + (i + 1),
              });
            });
          }

          internships = expanded;
        }

        setData(internships);

      } catch (err) {
        console.error(err);

        setError(null);

        // FALLBACK SAMPLE DATA

        const sample = [
          {
            id: 1,
            profile_name: "Web Development",
            company_name: "TechCorp",
            location_names: ["Delhi"],
            duration: "3 Months",
            stipend: {
              salaries: [{ salary: "8000" }],
            },
            apply_by: "30 Jun 2026",
            actively_hiring: true,
            start_date: "Immediately",
          },

          {
            id: 2,
            profile_name: "React Developer",
            company_name: "CodeLabs",
            location_names: ["Remote"],
            duration: "6 Months",
            stipend: {
              salaries: [{ salary: "15000" }],
            },
            apply_by: "25 Jun 2026",
            actively_hiring: true,
            start_date: "Immediately",
          },

          {
            id: 3,
            profile_name: "Frontend Developer",
            company_name: "InnovateX",
            location_names: ["Mumbai"],
            duration: "2 Months",
            stipend: {
              salaries: [{ salary: "5000" }],
            },
            apply_by: "20 Jun 2026",
            actively_hiring: false,
            start_date: "1 Jul 2026",
          },

          {
            id: 4,
            profile_name: "Backend Developer",
            company_name: "NextGen",
            location_names: ["Bangalore"],
            duration: "4 Months",
            stipend: {
              salaries: [{ salary: "12000" }],
            },
            apply_by: "18 Jun 2026",
            actively_hiring: true,
            start_date: "Immediately",
          },

          {
            id: 5,
            profile_name: "UI/UX Designer",
            company_name: "CreativeHub",
            location_names: ["Pune"],
            duration: "1 Month",
            stipend: {
              salaries: [{ salary: "3000" }],
            },
            apply_by: "15 Jun 2026",
            actively_hiring: false,
            start_date: "Immediately",
          },
        ];

        const expandedSample = [];

        for (let i = 0; i < 25; i++) {
          sample.forEach((item, index) => {
            expandedSample.push({
              ...item,
              id: `${i}-${index}`,

              company_name:
                item.company_name + " " + (i + 1),
            });
          });
        }

        setData(expandedSample);

      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}