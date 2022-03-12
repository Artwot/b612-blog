const router = require("express").Router();
const User = require("../models/Users");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

// Actualizar un usuario utilizando su id
router.put("/:id", async (req, res) => {
  // Comparar la propiedad userId del body respecto a la propiedad id de la url, si coinciden,
  // entonces permite editar el usuario
  if (req.body.userId === req.params.id) {
    // Esta condicional if() es para editar la contraseña, si esta se requiere.
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      // Busca el usuario mediante el id y actualiza los datos.
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body, // Se utiliza el método $set para enviar los datos a actualizar
        },
        { new: true } // Retorna inmediatamente el usuario actualizado.
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("Error: Solo puedes editar tu propia cuenta.");
  }
});

// Eliminar un usuario utilizando su id
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    // For delete the posts written by the user deleted:
    try {
      // Se hace la consulta del usuario en la BD 
      const user = await User.findById(req.params.id);
      try { 
        await Post.deleteMany({ username: user.username });  // Eliminar todos los posts que el usuario a eliminar haya escrito
        await User.findByIdAndDelete(req.params.id);  // Encontrar y eliminar al usuario actual.
        res.status(200).json("El usuario ha sido eliminado satisfactoriamente.");
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(404).json("ERROR: Usuario no encontrado");
    }
  } else {
    res
      .status(401)
      .json("ERROR: Solo puedes eliminar tu propia cuenta de usurio.");
  }
});

// Consultar un usuario en específico
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Se hace la consulta mediante el id
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
