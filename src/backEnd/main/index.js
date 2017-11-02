import colors from "colors";
import IoC from "electrolyte";

// === initialize inversion of control framework ===

IoC.use(IoC.dir("dist/backEnd/main/ioc"));

// ========= Console log colorization ==============

colors.setTheme({
  error: "red"
});

// ========== Initialize mvc application ==========

const initialize = async () => {

  const app = await IoC.create("app");
  
  app.listen2(() => {}, () => {});
  
};
  
initialize().catch(err => {
  console.error(err.message.error);
});