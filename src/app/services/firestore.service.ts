import { Injectable, Inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  setDoc,
  updateDoc,
  deleteDoc,
  DocumentData,
} from 'firebase/firestore';
import { FIRESTORE } from '../firebase.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(@Inject(FIRESTORE) private firestore: Firestore) {}

  /**
   * Devuelve los documentos de una colección.
   * Colecciones de MercadoVecino: users, stores, categories, products, orders, order_items.
   */
  list<T extends DocumentData>(collectionName: string): Observable<T[]> {
    const ref = collection(this.firestore, collectionName);
    return collectionData(ref, { idField: 'id' }) as Observable<T[]>;
  }

  /**
   * Devuelve un documento por su id.
   */
  get<T extends DocumentData>(collectionName: string, id: string): Observable<T | undefined> {
    const ref = doc(this.firestore, collectionName, id);
    return docData(ref, { idField: 'id' }) as Observable<T | undefined>;
  }

  /**
   * Crea un documento con el id indicado.
   */
  async create<T extends DocumentData>(
    collectionName: string,
    id: string,
    data: T,
  ): Promise<void> {
    const ref = doc(this.firestore, collectionName, id);
    await setDoc(ref, data as DocumentData);
  }

  /**
   * Actualiza un documento.
   */
  async update(
    collectionName: string,
    id: string,
    data: Partial<DocumentData>,
  ): Promise<void> {
    const ref = doc(this.firestore, collectionName, id);
    await updateDoc(ref, data);
  }

  /**
   * Elimina un documento de la colección.
   */
  async delete(collectionName: string, id: string): Promise<void> {
    const ref = doc(this.firestore, collectionName, id);
    await deleteDoc(ref);
  }
}
