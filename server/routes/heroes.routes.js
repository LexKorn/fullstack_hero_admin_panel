const {Router} = require ('express');
const Hero = require('../models/Hero');

const router = Router();

router.post('/post', async (req, res) => {
    try {
        const {name, description, element} = req.body;

        const hero = new Hero({name, description, element});

        await hero.save();

        res.status(201).json({message: 'Hero was created'});

    } catch(err) {
        res.status(500).json({message: 'Something wrong.. Try again...'});
    }
});


router.get('/', async (req, res) => {
    try {
        const heroes = await Hero.find(req.params); 
        res.json(heroes);

    } catch(err) {
        res.status(500).json({message: 'Something wrong.. Try again...'});
    }
});


router.delete('/:id', async (req, res) => {
	try {
		await Hero.findOne({ _id: req.params.id }).exec((err, result) => {
			if (err) {
                return res.status(422).json({ message: `No the same hero ${id}` });
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