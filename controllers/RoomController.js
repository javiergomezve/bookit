import ErrorHandler from '../utils/errorHandler';
import Room from '../models/Room';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import ApiFeatures from '../utils/apiFeatures';

const allRooms = catchAsyncErrors(async (req, res) => {
    const resPerPage = 4;

    const roomsCount = await Room.countDocuments();

    const apiFeatures = new ApiFeatures(Room.find(), req.query)
        .search()
        .filter();

    apiFeatures.pagination(resPerPage);
    let rooms = await apiFeatures.query;
    let filteredRoomsCount = rooms.length;

    res.status(200).json({
        success: true,
        roomsCount,
        resPerPage,
        filteredRoomsCount,
        rooms,
    });
});

const storeRoom = catchAsyncErrors(async (req, res) => {
    const room = await Room.create(req.body);

    return res.status(201).json({
        success: true,
        room,
    });
});

const getRoom = catchAsyncErrors(async (req, res, next) => {
    const room = await Room.findById(req.query.id);

    if (!room) {
        return next(new ErrorHandler('Room not found', 404));
    }

    return res.status(200).json({
        success: true,
        room,
    });
});

const updateRoom = catchAsyncErrors(async (req, res) => {
    let room = await Room.findById(req.query.id);

    if (!room) {
        return next(new ErrorHandler('Room not found', 404));
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
});

const deleteRoom = catchAsyncErrors(async (req, res) => {
    let room = await Room.findById(req.query.id);

    if (!room) {
        return next(new ErrorHandler('Room not found', 404));
    }

    await room.remove();

    return res.status(200).json({
        success: true,
        message: 'Room deleted',
    });
});

export { allRooms, storeRoom, getRoom, updateRoom, deleteRoom };
