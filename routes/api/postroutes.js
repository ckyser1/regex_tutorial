const router = require("express").Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require ('../../controllers/ThoughtCont')

router.route('/').get(getThoughts).post(createThought);

router.route('/:ThoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
 
router.route('/:ThoughtId/reactions').post(addReaction);

router.route('/:ThoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;


