import { db } from "../../../config/firebaseConfig";
import { DocumentReference } from "firebase-admin/firestore";

export const addDocument = async (): Promise<void> => {
    const docRef: DocumentReference = db.collection("products").doc("Product1");

    await docRef.set({
        name: "Product 1",
        sku: "ABC1234",
        quantity: 1,
        price: 2.22,
        category: "electronics",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    console.log("Product added");
}