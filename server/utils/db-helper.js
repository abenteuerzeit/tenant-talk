const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoServer = new MongoMemoryServer();

const getMongoUri = async () => await mongoServer.getUri();

class FakeDB {
    constructor() {
        this.data = {
          users: [
            { username: 'JohnDoe', password: 'password123' },
            { username: 'JaneDoe', password: 'password456' },
            { username: 'Alice', password: 'password789' },
          ],
          reviews: [
            { userId: 1, propertyId: 1, rating: 4, comment: 'Great place to live!' },
            { userId: 2, propertyId: 1, rating: 3, comment: 'Decent, but noisy neighbors.' },
            { userId: 1, propertyId: 2, rating: 5, comment: 'Amazing property and landlord!' },
          ],
        };
      }
    }

module.exports = { 
    getMongoUri,
    Db: new FakeDB()
};
