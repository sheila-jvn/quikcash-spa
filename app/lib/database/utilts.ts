import type { QuerySnapshot } from "firebase/firestore";

export const docsWithId = <T>(snapshot: QuerySnapshot) =>
  snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as T) }));
