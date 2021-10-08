package jar;

import static spark.Spark.*;

import com.google.gson.*;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args ){

        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        System.out.println( "Hello World!" );
        get("/hello", (req, res) -> {
            System.out.println("Request: " + req.queryParams("nombre") + " " + req.queryParams("password"));
            String msj;
            if (req.queryParams("nombre").equals("Andre"))
                msj = "Bienvenido!";
            else
                msj = "Usuario equivocado";
            return "Hola get " + msj + " " + "<a href='//127.0.0.1:5500/Formulario.html'>regresar</a>";
        });

        get("/Andre", (req, res) -> "Andre");

        post("/hello", (req, res) -> {
            System.out.println("Request: " + req.queryParams("nombre") + " " + req.queryParams("password"));
            String msj;
            if (req.queryParams("nombre").equals("root"))
                msj = "Bienvenido!";
            else
                msj = "Usuario equivocado";
            return "Hola post " + msj + " " + "<a href='//127.0.0.1:5500/Formulario.html'>regresar</a>";
        });

        post("/holaJson", (rq, rs) -> {
            System.out.println("Request: " + rq.queryParams("nombre") + " " +
            rq.queryParams("pass"));
            String request = rq.body();
            System.out.println("Request: " + request );
            String msj = null;
            JsonParser parser = new JsonParser();
            JsonElement arbol = parser.parse( request );
            JsonObject peticion = arbol.getAsJsonObject();

            Object nombre =  peticion.get("nombre") ;
            if (rq.queryParams("nombre").equals("andre"))
            msj = "Bienvenido!";
            else
            msj = "Usuario equivocado";
            return "Hola post " + nombre + " " + "<a href='//127.0.0.1:5500/Formulario.html'>regresar</a>";
        });


        get("/holaJson", (req,res)->{
            JsonObject respuesta = new JsonObject();
            respuesta.addProperty("user", req.queryParams("nombre"));
            respuesta.addProperty("access", "granted");
            respuesta.addProperty("time", 31312321);
            return respuesta;
        });   
    }
}
