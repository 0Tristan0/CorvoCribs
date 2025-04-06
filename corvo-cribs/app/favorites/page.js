"use client";

import MapIcon from "../components/icons/MapIcon";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import AnalyzedCard from "../components/AnalyzedCard";

export default function Favorites() {
  const [db, setDb] = useState([]);
  const [favorited, setFavorited] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load db and localStorage favoritedIDs together
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const storedIDs = localStorage.getItem("favoritedIDs");
        const favoritedIDs = storedIDs ? JSON.parse(storedIDs) : [];

        const response = await axios.get("http://localhost:8000/newApartments", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const apartments = response.data;
        const filtered = apartments.filter((apt) => favoritedIDs.includes(apt.id));

        setDb(apartments);
        setFavorited(filtered);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    const fetchAdditionalData = async () => {
      try {
        const responses = await Promise.all(
          favorited.map((item) =>
            axios.post("http://localhost:8000/analyzeApartment", item, {
              headers: {
                "Content-Type": "application/json",
              },
            })
          )
        );
        setAdditionalData(responses.map((res) => res.data));
      } catch (err) {
        console.error("Error analyzing apartments:", err);
      }
    };

    if (favorited.length > 0) {
      fetchAdditionalData();
    }
  }, [favorited]);

  console.log("Favorited Apartments:", favorited);
  console.log("Additional Data:", additionalData);

  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold mx-2">Favorites</h1>
      {!loading && additionalData.length > 0 && favorited.length > 0 ? (
        additionalData.map((data, index) => (
          <AnalyzedCard
            key={favorited[index]?.id || index}
            information={favorited[index]}
            analysis={data}
            loading={loading}
          />
        ))
      ) : (
        <p className="mx-2 mt-4 text-gray-500">No favorites yet.</p>
      )}
    </div>
  );
}