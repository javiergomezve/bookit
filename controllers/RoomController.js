import Room from '../models/Room';

const allRooms = async (req, res) => {
    try {
        const rooms = await Room.find();

        return res.status(200).json({
            success: true,
            count: rooms.length,
            rooms,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

const storeRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);

        return res.status(201).json({
            success: true,
            room,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

const getRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.query.id);

        if (!room) {
            return res.status(404).json({
                success: false,
                error: 'Room not found',
            });
        }

        return res.status(200).json({
            success: true,
            room,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

const updateRoom = async (req, res) => {
    try {
        let room = await Room.findById(req.query.id);

        if (!room) {
            return res.status(404).json({
                success: false,
                error: 'Room not found',
            });
        }

        room = await Room.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        return res.status(200).json({
            success: true,
            room,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

const deleteRoom = async (req, res) => {
    try {
        let room = await Room.findById(req.query.id);

        if (!room) {
            return res.status(404).json({
                success: false,
                error: 'Room not found',
            });
        }

        await room.remove();

        return res.status(200).json({
            success: true,
            message: 'Room deleted',
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};

export { allRooms, storeRoom, getRoom, updateRoom, deleteRoom };
