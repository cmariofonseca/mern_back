const NoteModel = require('../models/note');

const notesCtrl = {};

notesCtrl.createNote = async (req, res) => {
    const { title, content, author } = req.body;
    const newNote = new NoteModel({
        title,
        content,
        author
    });
    await newNote.save();
    res.json({ message: 'The note has been saved successfully' });
};

notesCtrl.getNote = async (req, res) => {
    const note = await NoteModel.findById(req.params.id);
    res.json(note);
};

notesCtrl.getNotes = async (req, res) => {
    const notes = await NoteModel.find();
    res.json(notes);
};

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await NoteModel.findOneAndUpdate(
        { _id: { $gte: req.params.id } },
        {
            title,
            content,
            author
        }
    );
    res.json({ message: 'The note has been updated successfully' });
};

notesCtrl.deleteNote = async (req, res) => {
    await NoteModel.findOneAndDelete({ _id: { $gte: req.params.id } });
    res.json({ message: 'The note has been deleted successfully' });
};

module.exports = notesCtrl;
