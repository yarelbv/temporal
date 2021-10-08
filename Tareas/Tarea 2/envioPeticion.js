
var btnGetJson = document.getElementById("btnGetJson");
btnGetJson.addEventListener("click", function() {
    var params = new URLSearchParams();
    var email = document.getElementById("exampleInputEmail1").value;
    var pass = document.getElementById("exampleInputPassword1").value;
    params.append("nombre", email);
    params.append("pass", pass);
    console.log(btnGetJson)
    console.log("texto?" + btnGetJson)
    console.log(params);
    console.log(params.get("nombre"))
    console.log("url?" + params)
    console.log("------")
        // es un error enviar datos json con llamada get
    console.log("{" + "name:'" + params.get("nombre") + "'," + "pass:'" + params.get("pass") + "'}");
    var params2 = "{" + "name:'" + params.get("nombre") + "'," + "pass:'" + params.get("pass") + "'}";
    axios.get("http://localhost:4567/holaJson?" + params)
        .then(function(rs) {
            console.log(rs.data);
            alert(rs.data.time)
        })
        .catch(function(error) {
            console.log(error);
        });
});

var btnPostJson = document.getElementById("btnPostJson");
btnPostJson.addEventListener("click", function() {
    var params = new URLSearchParams();
    var email = document.getElementById("exampleInputEmail1").value;
    var pass = document.getElementById("exampleInputPassword1").value;
    params.append("nombre", email);
    params.append("pass", pass);
    console.log("------")
    console.log("{" + "name:'" + params.get("nombre") + "'," + "pass:'" + params.get("pass") + "'}");
    var params2 = "{" + "name:'" + params.get("nombre") + "'," + "pass:'" + params.get("pass") + "'}"; // forma de equívoca de construir el objeto, ya que le sobran las llaves
    var params3 = "name:'" + params.get("nombre") + "'," + "pass:'" + params.get("pass") + "'";
    axios.post("http://localhost:4567/holaJson", { "nombre": params.get("nombre"), pass: params.get("pass") })
        .then(function(rs) {
            console.log(rs.data);
            //alert(rs.data)
        })
        .catch(function(error) {
            console.log(error);
        });
});