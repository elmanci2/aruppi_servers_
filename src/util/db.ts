import sqlite3 from "sqlite3";
import { config } from "../config/config";

interface DataToSave {
    id: string;
    link: string;
}

export class SQLiteDatabase {
    private db: sqlite3.Database;

    constructor(databaseName: string) {
        this.db = new sqlite3.Database(databaseName);
        this.setupTable();
    }

    private setupTable() {
        this.db.serialize(() => {
            this.db.run(`CREATE TABLE IF NOT EXISTS ${config.db.db_names.servers} (id TEXT, link TEXT)`);
        });
    }

    async saveData(data: DataToSave): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.db.serialize(() => {
                // Verificar si el registro ya existe
                this.db.get(
                    `SELECT COUNT(*) as count FROM ${config.db.db_names.servers} WHERE id = ?`,
                    [data.id],
                    (err: Error, row: any) => {
                        if (err) {
                            reject(err);
                        } else {
                            if (row.count === 0) {
                                // El registro no existe, insertarlo
                                const stmt = this.db.prepare(`INSERT INTO ${config.db.db_names.servers} VALUES (?, ?) `);
                                stmt.run(data.id, data.link, (err: Error) => {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        stmt.finalize();
                                        resolve();
                                    }
                                });
                            } else {
                                // El registro ya existe, no se inserta de nuevo
                                resolve();
                            }
                        }
                    }
                );
            });
        });
    }

    closeDatabase() {
        this.db.close();
    }
}
