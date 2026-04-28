require('dotenv').config()

module.exports = {
  mongodb: {
    url: process.env.MONGODB_URL,
    databaseName: process.env.MONGODB_DATABASE,
  },
  migrationsDir: 'src/database/migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.ts',
  useFileHash: false,
  moduleSystem: 'esm',
};