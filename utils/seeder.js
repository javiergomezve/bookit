require('dotenv').config({ path: '.env.local' });
const rooms = require('../data/rooms.json');
const dbConnect = require('../config/dbConnect');
const Room = require('../models/Room');

dbConnect();

const seedRooms = async () => {
    try {
        await Room.deleteMany();
        console.log('Rooms are deleted');

        await Room.insertMany(rooms);
        console.log('All rooms are added');

        process.exit(1);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

seedRooms();
