DREW WOLFSON W07 D01


db.unicorns.find()
db.unicorns.find({gender: 'f'})
db.unicorns.find({loves: 'grape'})
db.unicorns.find({gender: 'f', loves: 'apple'})
db.unicorns.find({gender: 'f', $or: [{loves: 'apple'}, {loves: 'carrot'}, {loves: 'strawberry'}]})
db.unicorns.find({$and: [{weight: {$gt: 550}}, {loves: "watermelon"}]}).pretty()
db.unicorns.find({dob: {$lt: new Date('2000')}})
db.unicorns.find({vampires: {$exists: false}})
db.unicorns.find({gender: 'm', vampires: {$gt: 25}})
db.unicorns.insert({name: "Syed", dob: new Date('1654-01-07'), loves: ['JavaScript', 'teaching', 'smurfs'], weight: 140, vampires: 1523})
db.vampires
db.vampires.insert({name: "Liza", death: new Date ('1965-08-07'), loves: ['blood', 'killing', 'mayhem'], unicorns: 154, gender: 'f', owns: ['headphones', 'MacBook', 'water bad']})
db.vampires.insert({name: "Shorty", death: new Date ('1125-01-01'), loves: "being silly", unicorns: 1550054, current_location: "Google, Inc"})
db.unicorns.update({name: "Syed"},{$inc: {vampires:1}}) db.vampires.remove({name: "Liza"})
db.unicorns.update({ }, {$pull: {loves: 'carrot'}}, {multi: true})
db.unicorns.updateMany({},{$push:{loves:'marshmallow'}})
db.vampires.update({name: "Shorty"}, {$push: {unicornSpies: ['ObjectId("56f9b4389ba35ecd78f8ebe7")', 'ObjectId("56f9b4389ba35ecd78f8ebe8")', 'ObjectId("56f9b4389ba35ecd78f8ebe9")']}})
