import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from './schema'

const client = postgres(process.env.DATABASE_URL!)

const db = drizzle(client, {
  schema,
})

export default db








// import * as schema from './schema'

// import { drizzle } from 'drizzle-orm/postgres-js'
// import postgres from 'postgres'

// const client = postgres(process.env.DATABASE_URL!, {
//   max: 10,
//   idle_timeout: 20,
// })

// const db = drizzle(client, {
//   schema,
// })

// export default db







// import * as schema from './schema'

// import { drizzle } from 'drizzle-orm/neon-http'
// import { neon } from '@neondatabase/serverless'

// const sql = neon(process.env.DATABASE_URL!)

// const db = drizzle(sql, {
//   schema,
// })

// export default db




// import * as schema from './schema'

// import { drizzle } from 'drizzle-orm/vercel-postgres'
// import { sql } from '@vercel/postgres'
// const db = drizzle(sql, {
//   schema,
// })
// export default db