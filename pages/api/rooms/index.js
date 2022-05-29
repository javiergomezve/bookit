import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';

import { allRooms, storeRoom } from '../../../controllers/RoomController';

const handler = nc();

dbConnect();

handler.get(allRooms);
handler.post(storeRoom);

export default handler;
