$(document).ready(function () {
    $("#ctdCep").focusout(function () {

            var oldCep = $("#ctdCep").val();
            cep = oldCep.replace("-", "");
            var urlCep = "https://viacep.com.br/ws/" + cep + "/json";

            $.ajax({
                url: urlCep,
                type: "GET",
                dataType: "JSON",
                success: function (data) {
                    console.log(data);

                    $("#ctdCep").val(data.cep);
                    $("#ctdLogradouro").val(data.logradouro);
                    $("#ctdComplemento").val(data.complemento);
                    $("#ctdBairro").val(data.bairro);
                    $("#ctdLocalidade").val(data.localidade);
                    $("#ctdUf").val(data.uf);
                    $("#ctdIbge").val(data.ibge);
                    $("#ctdGia").val(data.gia);
                    
                },
                error: function (error) {
                    window.document.alert("Erro no sistema ! tente novamente.")
                }
        });                
    });
});