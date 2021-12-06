import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../Firebase/firebaseConfig";

export const useFetch = () => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dbRef = ref(db, "goods");

    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(JSON.stringify(snapshot.val()));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    async function fetchData() {
      try {
        const json = await fetch('DB.json');
        const response = await json.json();
        setResponse(response);
      } catch(error) {
        setError(error)
      }
    }
    setTimeout(fetchData, 5000);
  }, []);

  return { response, error };
};

