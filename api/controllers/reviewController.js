import Review from '../models/Review';

const getAllReviews = (req, res) => {
    Review.find({ approved: true }, (err, reviews) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        res.json({ reviews });
    });
};

const getFeaturedReviews = (req, res) => {
    if (err) {
        return res.status(500).json({
            error: true,
            message: err.message
        });
    }

    Review.find({ approved: true, featured: true }, (err, reviews) => {
        res.json({ reviews });
    });
};

const createReview = (req, res) => {
    const name = req.body.name;
    const company = req.body.company;
    const rating = req.body.rating;
    const network = req.body.network;
    const body = req.body.body;
    const avatar = req.body.avatar;
    const featured = false;
    const approved = false;

    const newReview = new Review();
    newReview.name = name;
    newReview.company = company;
    newReview.rating = rating;
    newReview.network = network;
    newReview.body = body;
    newReview.avatar = avatar;
    newReview.featured = featured;
    newReview.approved = approved;

    newReview.save((err, review) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        res.json({ review });
    });
};

const setReviewFeatured = (req, res) => {
    Review.findByIdAndUpdate(req.params.reviewId, { featured: true }, (err, review) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        res.json({ review });
    });
};

const setReviewApproved = (req, res) => {
    Review.findByIdAndUpdate(req.params.reviewId, { approved: true }, (err, review) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        res.json({ review });
    });
};

const deleteReview = (req, res) => {
    Review.findOneAndDelete(req.params.reviewId, err => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        res.sendStatus(200);
    });
}

export default {
    getAllReviews,
    getFeaturedReviews,
    createReview,
    setReviewFeatured,
    setReviewApproved,
    deleteReview
};
