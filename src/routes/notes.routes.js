const { Router } = require("express"); /* importa o express.Router de dentro do express */

const NotesController = require("../controllers/NotesController"); /* importa o arquivo notes.routes, então quando chamar notesRouter vai para esse arquivo de grupo de rotas, que tem as rotas de notes */
const ensureAuthenticated = require("../middlewares/ensureAuthenticated"); // Importando o middleware de autenticação.

const notesRoutes = Router(); /* inicializar o router - aqui é onde vão ficar as rotas */

const notesController = new NotesController(); /* instanciar o controller, a class NotesController */

notesRoutes.use(ensureAuthenticated); /* Todas as rotas de notes precisam estar autenticadas. */

notesRoutes.post("/", notesController.create); /* Utilizar o create da class NotesController do arquivo de controller NotesController.js */
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.get("/", notesController.index); /* visto que esse é passado através de uma query e não parâmetro, não coloca nada */

module.exports = notesRoutes; /* exporta o router para quem quiser utilizar esse arquivo poder utilizar. Com isso, o server.js poder acessar as rotas da aplicação */