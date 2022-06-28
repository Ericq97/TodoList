const express = require("express");
const app = express();
const path = require('path');
const items = require('./models/item');
const db = require('./config/database');
const lists = require("./models/list");
const methodOverride = require('method-override');
const { response } = require("express");
const port = 3001;

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'));

app.get('/todolists', async(req, res) => {
    res.json(await lists.findAll());
})

app.get('/todolists/:id', async(req, res) => {
     const listID = req.params.id;
    res.json(await items.findAll({
             where: {
                 category: listID
             }
         })
         );
})

app.get('/todolist/:id', async(req, res) => {
    const listID = req.params.id;
   res.json(await lists.findAll({
            where: {
                id: listID
            }
        })
        );
})

app.get('/item/:id', async(req, res) => {
    const itemID = req.params.id;
    res.json(await items.findAll({
        where: {
            id: itemID
        }
    }));
})

app.delete('/todolists/delete/:listid', async(req, res) => {
    const listID = req.params.listid;
    await lists.destroy({ 
        where: {id : listID}
    })
})

app.post('/todolist/:newTitle/:newDescription', async(req, res) => {
    const newTitle = req.params.newTitle;
    const newDescription = req.params.newDescription;
    const list = {title: newTitle,
    description: newDescription}
    await lists.create(list);
})

app.post('/item/:id/:title', async(req, res) => {
    const listID = req.params.id;
    const newtitle = req.params.title;
    await items.create({title: newtitle, category: listID});
})

app.put('/item/update/:itemid/:listid/:newvalue', async(req, res) => {
    const newTitle = req.params.newvalue;
    const itemID = req.params.itemid;
    const listID = req.params.listid;
    await items.update(
        { title: newTitle },
        { where: {id : itemID}}
    )
    res.json(await items.findAll({
        where: {
            id: itemID
        }
    }))
})

app.put('/item/done/:itemid', async(req, res) => {
    console.log("jell")
    const itemID = req.params.itemid;
    const item = await items.findByPk(itemID);
    const newTitle = `${item.title}(DONE)`;
    
    await items.update(
        { title: newTitle },
        { where: {id : itemID}}
    )
})

app.delete('/item/delete/:itemid', async(req, res) => {
    const itemID = req.params.itemid;
    await items.destroy({ 
        where: {id : itemID}
    })
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}!`);
})