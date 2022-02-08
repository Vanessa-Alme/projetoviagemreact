import react from "react";

export default function Form () {
    return (
        <>
        <div class="container">
        <form class="was-validated">

            <div class="form-row col-7">
                <div class="form-group col-md-6">
                  <label for="input-group-text">Nome</label>
                  <input type="text" class="form-control" id="input-group-text" placeholder="Nome"/>
                </div>
            </div>

            <div class="form-row col-7">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
            </div>

            <div class="form-row col-7">
                <div class="form-group col-md-6">
                  <label for="input">Telefone</label>
                  <input type="number" class="form-control" id="input" placeholder="Telefone"/>
                </div>
            </div>

                <div class="form-row col-7">
              <label for="Textarea">Mensagem</label>
              <textarea class="form-control" id="input-group-text" placeholder="Escreva a sua mensagem aqui"></textarea>
              
            </div>
    
            <button type="submit" class="btn btn-primary btn-lg">Enviar</button>
            </form>
        </div>
        </>
    )
}