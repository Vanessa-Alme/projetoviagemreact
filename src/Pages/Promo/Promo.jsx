import Nav from "../../Componentes/Nav/Nav";
import Jumbpromo from "../../Componentes/Jumbotron/Jumbpromo";
import Cardpromosingle from "./Cardpromosingle";
import Fortaleza from '../../assets/img/fortalezapromo.jpg'
import Lisboa from '../../assets/img/lisboapromo.jpg'
import Madrid from '../../assets/img/madridpromo.jpg'
import Natal from '../../assets/img/natalpromo.jpg'


export default function Promo() {
    return (
        <>
        <Nav></Nav>
        <Jumbpromo></Jumbpromo>

         <div class="container-fluid">
                <div class="card-deck ">
                    <div class="card bg-light">
                    <Cardpromosingle img={Fortaleza}></Cardpromosingle>                        <div class="card-body">
                            <h5 class="card-title">Fortaleza</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolorum veniam
                                similique, ea praesentium ad odit aliquam earum quo vero nemo distinctio ullam? Rem sapiente quis
                                blanditiis voluptatibus, aut eveniet?</p>
                        </div>
                    
                        <div class="card-footer">

                            <p class="text-sm-center">
                                <strong> Pacote completo de:</strong>
                            </p>
                            <del>
                                <p class="text-danger text-sm-center h5">R$ 5000,00</p>
                            </del>
                            <p class="text-sm-center">
                                <strong> por:</strong>
                            </p>
                            <p class="text-primary h2 text-sm-center">R$ 2500,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>

                        </div>
                    </div>

                    <div class="card">
                    <Cardpromosingle img={Lisboa}></Cardpromosingle>                        <div class="card-body">
                            <h5 class="card-title">Lisboa</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eaque quasi
                                reprehenderit molestias, cumque consequatur quidem aspernatur earum dicta eveniet sequi repellendus.
                                Quaerat officiis minus itaque sit asperiores voluptatem eaque?</p>
                        </div>
                        <div class="card-footer">

                            <p class="text-sm-center">
                                <strong> Pacote completo de:</strong>
                            </p>
                            <del>
                                <p class="text-danger text-sm-center h5">R$ 7000,00</p>
                            </del>
                            <p class="text-sm-center">
                                <strong> por:</strong>
                            </p>
                            <p class="text-primary h2 text-sm-center">R$ 3500,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>

                        </div>
                    </div>

                </div>

                <br></br>



                <div class="card-deck">
                    <div class="card">
                    <Cardpromosingle img={Madrid}></Cardpromosingle>                        <div class="card-body">
                            <h5 class="card-title">Madrid</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita soluta, possimus
                                consequuntur repellat, ducimus rem deserunt molestias commodi quisquam aspernatur dicta exercitationem
                                officiis repudiandae dolor porro nobis laudantium, numquam libero?</p>
                        </div>
                        <div class="card-footer">

                            <p class="text-sm-center">
                                <strong> Pacote completo de:</strong>
                            </p>
                            <del>
                                <p class="text-danger text-sm-center h5">R$ 7500,00</p>
                            </del>
                            <p class="text-sm-center">
                                <strong> por:</strong>
                            </p>
                            <p class="text-primary h2 text-sm-center">R$ 3999,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>


                        </div>
                    </div>

                    <div class="card bg-light">
                    <Cardpromosingle img={Natal}></Cardpromosingle>                        <div class="card-body">
                            <h5 class="card-title">Natal</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsum aperiam aliquam
                                harum eos! Soluta tenetur sequi amet molestiae, voluptates dolores qui sint mollitia ratione, aspernatur
                                esse dignissimos, a harum.</p>
                        </div>
                        <div class="card-footer">

                            <p class="text-sm-center">
                                <strong> Pacote completo de:</strong>
                            </p>
                            <del>
                                <p class="text-danger text-sm-center h5">R$ 4500</p>
                            </del>
                            <p class="text-sm-center">
                                <strong> por:</strong>
                            </p>
                            <p class="text-primary h2 text-sm-center">R$ 2300,00</p>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>


                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
