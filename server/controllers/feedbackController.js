const Feedback = require('../models/Feedback');

// Create new feedback
exports.createFeedback = async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;
    const feedback = new Feedback({ name, email, message, rating });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully', feedback });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};

// Get all feedback
exports.getFeedback = async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbackList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
}; 