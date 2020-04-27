import { useState, useEffect } from "react";
import db from "./firebase";

export const useData = (data, setData) => {
  useEffect(() => {
    console.log("d", data);
    const unsubscribe = db.collection("activities").onSnapshot(res => {
      res.docChanges().forEach(change => {
        const doc = { ...change.doc.data(), id: change.doc.id };

        switch (change.type) {
          case "added":
            console.log("item added");
            data.push(doc);
            setData(data);
            break;
          case "modified":
            const index = data.findIndex(item => item.id === doc.id);
            data[index] = doc;
            break;
          case "removed":
            data = data.filter(item => item.id !== doc.id);
            break;
          default:
            break;
        }
      });
      console.log("TEST", data.map(d => d.id));
    });
    console.log("djfk", data);
    return unsubscribe;
  }, []);
};
