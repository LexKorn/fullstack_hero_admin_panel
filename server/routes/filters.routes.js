const {Router} = require ('express');
const Filter = require('../models/Filter');

const router = Router();

router.post('/post', async (req, res) => {
    try {
        const {name, label, className} = req.body;

        const filter = new Filter({name, label, className});

        await filter.save();

        res.status(201).json({message: 'Filter was created'});

    } catch(err) {
        res.status(500).json({message: 'Something wrong.. Try again...'});
    }
});


router.get('/', async (req, res) => {
    try {
        const filters = await Filter.find(req.params); 
        res.json(filters);

    } catch(err) {
        res.status(500).json({message: 'Something wrong.. Try again...'});
    }
});


router.delete('/:id', async (req, res) => {
	try {
		await Filter.findOne({ _id: req.params.id }).exec((err, result) => {
			if (err) {
                return res.status(422).json({ message: `No the same filter ${id}` });
            }

			result
				.remove()
				.then(() => res.status(200).json({ message: 'Success' }))
				.catch((err) => console.error(err));
		});
        
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;