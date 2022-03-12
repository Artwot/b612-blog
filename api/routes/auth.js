const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

// Registrar usuario
router.post("/register", async (req, res) => {
  try {
    // Generar un password encriptado mediante la librería Bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // Asignar los datos del request al usuario a crear
    const newUser = new User({
      name: req.body.name,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    // Guardar el usuario mediante el método .save() que nos proporciona mongoose para MongoDB
    const user = await newUser.save();
    res.status(200).json(user); // Retornar el status 200 de que todo funcionó correctamente
  } catch (e) {
    // Si hay algún error al registrar el usuario retornar el erro 500
    res.status(500).json(e);
  }
});

// Inicio de sesión
router.post("/login", async (req, res) => {
  try {
    // Buscar en la BD si el username del usuario exite
    const user = await User.findOne({ username: req.body.username });
    // si no existe, retornar el mensaje de error
    if (!user) {
      res.status(400).json("Wrong credentials!");
    }

    // Validar que la contraseña existe o es correcta, haciendo uso del método .compare()
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      res.status(400).json("Wrong credentials!");
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
