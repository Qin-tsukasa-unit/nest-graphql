module.exports = {
  type: 'mysql',
  host: '192.168.99.101',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'test',
  synchronize: false,
  logging: true,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};