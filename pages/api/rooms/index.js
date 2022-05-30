import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';

import { allRooms, storeRoom } from '../../../controllers/RoomController';
import handleError from '../../../middlewares/errors';

const handler = nc({ onError: handleError });

dbConnect();

handler.get(allRooms);
handler.post(storeRoom);

export default handler;
