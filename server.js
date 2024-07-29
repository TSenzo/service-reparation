const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route pour le formulaire de contact (exemple basique)
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Ici, vous pouvez ajouter la logique pour enregistrer le message ou envoyer un email
    console.log(`Message de ${name} (${email}): ${message}`);
    res.status(200).json({ status: 'success' });
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
