const sauce = require('../models/sauce');
const Sauce = require('../models/sauce');



exports.createSauce = (req, res, next) => {

    const sauceObject = JSON.parse(req.body.sauce);
    
    
    const sauce = new Sauce({
        userId: sauceObject.userId,
        name: sauceObject.name,
        manufacturer: sauceObject.manufacturer,
        description: sauceObject.description,
        mainPepper: sauceObject.mainPepper,
        heat: sauceObject.heat,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: 0,
        usersDisliked: 0,
    });
    
   sauce.save()
   .then(() => res.status(201).json({ message: 'sauce créé !' }))
          .catch(error => res.status(400).json({ error }));
};

exports.getSauce = (req, res, next) => {
        Sauce.find()
          .then(sauces=> res.status(200).json(sauces))
          .catch(error => res.status(400).json({ error }));
}

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  };

exports.modifySauce = (req, res, next) => {
    if (req.file) {
        
    }
    else {
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Sauce modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };}
exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.likeSauce = (req, res, next) => {
      sauce.updateOne({ _id: req.params.id }), {... req.body, likes: req.body.likes, usersLiked: req.body.usersLiked }
       .then(() => res.status(200).json({ message: 'Sauce modifié !'}))
      .catch(error => res.status(400).json({ error }));
  }