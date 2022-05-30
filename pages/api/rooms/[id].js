import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';
import {
    deleteRoom,
    getRoom,
    updateRoom,
} from '../../../controllers/RoomController';
import handleError from '../../../middlewares/errors';

const handler = nc({ onError: handleError });

dbConnect();

handler.get(getRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
