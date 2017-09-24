export default function setRoutes(app) {
    app.get("/", function(req, res){
        res.send("hello world");
    });
}