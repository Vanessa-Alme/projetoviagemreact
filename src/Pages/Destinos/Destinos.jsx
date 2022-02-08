import react from "react"
import Jumbdestinos from "../../Componentes/Jumbotron/Jumbdestinos"
import Nav from "../../Componentes/Nav/Nav"
import Carddestinosingle from "./Carddestinosingle"
import Alemanha from '../../assets/img/alemanha.jpg'
import Cancun from '../../assets/img/cancun.jpg'
import Chile from '../../assets/img/chile.jpg'
import China from '../../assets/img/china.jpg'
import Grecia from '../../assets/img/grecia.jpg'
import Maldivas from '../../assets/img/ilhasmaldivas.jpg'
import Japão from '../../assets/img/japao.jpg'
import Nepal from '../../assets/img/nepal.jpg'
import Paris from '../../assets/img/paris.jpg'

export default function Destinos() {
    return (
        <>

            <Nav></Nav>
            <Jumbdestinos></Jumbdestinos>
            <div class="container-fluid">

                <div class="card-deck ">
                    <div class="card bg-light border-dark">
                        <Carddestinosingle img={Alemanha}></Carddestinosingle>
                        <div class="card-body">
                            <h5 class="card-title">Alemanha</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorum veniam
                                similique, ea praesentium ad odit aliquam earum quo vero nemo distinctio ullam? Rem sapiente quis
                                blanditiis voluptatibus, aut eveniet?</p>
                        </div>
                        <div class="card-footer">
                            <p class="text-sm-center">
                                <strong> Pacote completo por:</strong>
                            </p>
                            <p class="text-primary h2 text-sm-center">R$ 7500,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>
                        </div>
                    </div>


                    <div class="card">
                    <Carddestinosingle img={Cancun}></Carddestinosingle>                        
                        <div class="card-body">
                            <h5 class="card-title">Cancun - México</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eaque quasi
                                reprehenderit molestias, cumque consequatur quidem aspernatur earum dicta eveniet sequi repellendus.
                                Quaerat officiis minus itaque sit asperiores voluptatem eaque?</p>
                        </div>
                        <div class="card-footer">
                            <strong> Pacote completo por:</strong>
                            <p class="text-primary h2 text-sm-center">R$ 5600,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>
                        </div>
                    </div>


                    <div class="card bg-light border-dark">
                    <Carddestinosingle img={Chile}></Carddestinosingle>                        
                        <div class="card-body">
                            <h5 class="card-title">Chile</h5>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt non odit quidem ullam
                                eum illum quam doloribus explicabo, perspiciatis debitis dignissimos quaerat neque. Exercitationem, hic
                                sed expedita molestias porro illum.</p>
                        </div>
                        <div class="card-footer">
                            <strong> Pacote completo por:</strong>
                            <p class="text-primary h2 text-sm-center">R$ 3500,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>
                        </div>
                    </div>
                </div>
                    <br></br>

                <div class="card-deck">
                    <div class="card">
                    <Carddestinosingle img={China}></Carddestinosingle>                       
                         <div class="card-body">
                            <h5 class="card-title">China</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita soluta, possimus
                                consequuntur repellat, ducimus rem deserunt molestias commodi quisquam aspernatur dicta exercitationem
                                officiis repudiandae dolor porro nobis laudantium, numquam libero?</p>
                        </div>
                        <div class="card-footer">
                            <strong> Pacote completo por:</strong>
                            <p class="text-primary h2 text-sm-center">R$ 8999,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>
                        </div>
                    </div>
                    <div class="card bg-light border-dark">
                    <Carddestinosingle img={Grecia}></Carddestinosingle>                        
                        <div class="card-body">
                            <h5 class="card-title">Grécia</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsum aperiam aliquam
                                harum eos! Soluta tenetur sequi amet molestiae, voluptates dolores qui sint mollitia ratione, aspernatur
                                esse dignissimos, a harum.</p>
                        </div>
                        <div class="card-footer">
                            <strong> Pacote completo por:</strong>
                            <p class="text-primary h2 text-sm-center">R$ 8870,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>
                        </div>
                    </div>
                    <div class="card">
                    <Carddestinosingle img={Maldivas}></Carddestinosingle>                        
                        <div class="card-body">
                            <h5 class="card-title">Ilhas Maldivas</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ad voluptatem. Ut
                                quisquam delectus debitis obcaecati quam dolorum quis, odit fugit velit quae eos exercitationem possimus
                                ipsum? Praesentium, tempore voluptas.</p>
                        </div>
                        <div class="card-footer">
                            <strong> Pacote completo por:</strong>
                            <p class="text-primary h2 text-sm-center">R$ 6650,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>
                        </div>
                    </div>
                </div>

                <br></br>

                <div class="card-deck">
                    <div class="card bg-light border-dark">
                    <Carddestinosingle img={Japão}></Carddestinosingle>                          
                          <div class="card-body">
                                <h5 class="card-title">Japão</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorum veniam
                                    similique, ea praesentium ad odit aliquam earum quo vero nemo distinctio ullam? Rem sapiente quis
                                    blanditiis voluptatibus, aut eveniet?</p>
                            </div>
                            <div class="card-footer">
                                <strong> Pacote completo por:</strong>
                                <p class="text-primary h2 text-sm-center">R$ 7999,00</p>
                                <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>
                            </div>
                    </div>
                    <div class="card">
                    <Carddestinosingle img={Nepal}></Carddestinosingle>                      
                          <div class="card-body">
                            <h5 class="card-title">Nepal</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus laboriosam
                                possimus non alias ipsum nostrum dolorum odit porro nulla, dolores harum reiciendis commodi hic earum. Qui
                                unde voluptatibus porro!</p>
                        </div>
                        <div class="card-footer">
                            <strong> Pacote completo por:</strong>
                            <p class="text-primary h2 text-sm-center">R$ 8499,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>

                        </div>
                    </div>
                    <div class="card bg-light border-dark">
                    <Carddestinosingle img={Paris}></Carddestinosingle>                       
                         <div class="card-body">
                            <h5 class="card-title">Paris</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quisquam in ducimus
                                ipsam blanditiis magnam aperiam cumque amet optio laborum, tempora quos voluptates repellat qui ratione
                                illo exercitationem suscipit corporis.</p>
                        </div>
                        <div class="card-footer">
                            <strong> Pacote completo por:</strong>
                            <p class="text-primary h2 text-sm-center">R$ 8599,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}