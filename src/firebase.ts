import { FirebaseApp, initializeApp } from "firebase/app";
import config from "./config.json";
import {
  Database,
  child,
  get,
  getDatabase,
  push,
  ref,
  set,
} from "firebase/database";

const app = initializeApp(config.FirebaseOptions);
const database = getDatabase(app);

class FirebaseService {
  constructor(private app: FirebaseApp, private db: Database) {}
  async addItemInPath(path: string, item: any) {
    try {
      //   set(ref(this.db, path + item.id), item).then(console.log);

      const pathListRef = ref(this.db, path);
      const newItemRef = push(pathListRef);
      set(newItemRef, item);
    } catch (error) {
      return error;
    }
  }
  async getItemInPathById(path: string, id: number) {
    try {
      const dbRef = ref(this.db);
      get(child(dbRef, path + "/" + id))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      return error;
    }
  }
  async getAllItemsInPath(path: string) {
    try {
      const pathRef = ref(this.db, path);
      return (await get(pathRef)).val();
    } catch (error) {
      return;
    }
  }
}

export const firebaseService = new FirebaseService(app, database);
