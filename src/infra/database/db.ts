import * as sqlite3 from 'sqlite3'
import { migrateProducts } from './migration'

const sqlite = sqlite3.verbose()
const db = new sqlite3.Database('./database.db')

db.on('open', () => {
  migrateProducts(db, Boolean(process.env.RUN_MIGRATIONS) ?? false)
})

export default db
