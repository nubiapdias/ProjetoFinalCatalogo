import { musica } from "../models/model.js";

export const getIndex = async (req, res) => {
  try {
    const musicas = await musica.findAll({
        order: [["banda", "ASC"]]
    });
    res.status(200).render("index.ejs", {
      musicas,
    });
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const song = await musica.findByPk(req.params.id);
    res.status(200).render("detalhes.ejs", {
      song,
    });
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};

export const getDelete = async (req, res) => {
  try {
    await musica.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getCriar = (req, res) => {
  res.status(200).render("criar");
};

export const postCriar = async (req, res) => {
  try {
    const { banda, img, ano, url, album, creditos, musicas } = req.body;
    await musica.create({
      banda,
      img,
      ano,
      url,
      album,
      creditos,
      musicas,
    });
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getEditar = async (req, res) => {
    const musicas = await musica.findByPk(req.params.id)
    res.status(200).render('editar.ejs', {
        musicas
    })
}

export const postEditar = async (req, res) => {
    const { banda, img, ano, url, album, creditos, musicas } = req.body
    try {
        await musica.update({
            banda: banda, img: img, ano: ano, url: url, album: album, creditos: creditos, musicas: musicas 
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/')
    }

    catch(err) {
        res.status(500).send(err.message)
    }
}