const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter room name'],
            trim: true,
            maxLength: [100, 'Room name cannot exceed 100 characters'],
        },
        pricePerNight: {
            type: Number,
            required: [true, 'Please enter room price per night'],
            maxLength: [4, 'Room name cannot exceed 4 characters'],
            default: 0.0,
        },
        description: {
            type: String,
            required: [true, 'Please enter description'],
        },
        address: {
            type: String,
            required: [true, 'Please enter address'],
        },
        guestCapacity: {
            type: Number,
            required: [true, 'Please enter guest capacity'],
        },
        numOfBeds: {
            type: Number,
            required: [true, 'Please enter number of beds'],
        },
        internet: {
            type: Boolean,
            default: false,
        },
        breakfast: {
            type: Boolean,
            default: false,
        },
        airCondition: {
            type: Boolean,
            default: false,
        },
        petsAllow: {
            type: Boolean,
            default: false,
        },
        roomCleaning: {
            type: Boolean,
            default: false,
        },
        ratings: {
            type: Number,
            default: 0,
        },
        numOfReviews: {
            type: Number,
            default: 0,
        },
        images: [
            {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            },
        ],
        category: {
            type: String,
            require: [true, 'Please enter a category'],
            enum: {
                values: ['King', 'Single', 'Twins'],
                message: 'Please select correct category for room',
            },
        },
        reviews: [
            {
                user: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'User',
                    require: false,
                },
                name: {
                    type: String,
                    required: true,
                },
                rating: {
                    type: Number,
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,
                },
            },
        ],
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            require: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema);
