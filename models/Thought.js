const { Schema, model } = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionBody: {
            type: String,
            required: true,
            max: [280, 'Your reaction can only contain u to 280 characters.']
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            min: [1, 'Your thought must contain at least one character.'],
            max: [280, 'Your thought cannot contain more than 280 characters.']
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        }, 
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;