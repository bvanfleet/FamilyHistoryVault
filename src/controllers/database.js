const sql = require('msnodesqlv8')

const connectionString = 'Server={server};Database=FHVault;Trusted_Connection=Yes;Driver={Sql Server Native Client 11.0}'
const query = 'SELECT * FROM dbo.Individuals'

function logAllIndividuals() {
  console.log('Connecting to database...')
  sql.query(connectionString, query, (err, rows) => {
    if (err) {
      console.error(err)
    }

    console.log(rows)
  })
}
