import React from 'react';

import './Tendencies.css';

import MovieTendencyComponent from '../components/MovieTendencyComponent/MovieTendencyComponent';
import TitleComponent from '../components/TitleComponent/TitleComponent';

function Tendencies() {
    return (
        <div id="paginaTendencies">
            <TitleComponent title="Tendências"/>

            <div id="conteudoTendencies">
                <div id="tendenciasID">
                    <p id="tituloFilme">
                        <img src="https://s.aficionados.com.br/imagens/img-20210629-201036_cke.jpg" alt="" />
                        <h2>Bad Fallen</h2>
                    </p>
                    <p id="textoTendencias">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lectus a augue fringilla gravida. Aliquam erat volutpat. Donec imperdiet tellus mauris.
                        In porta tempus ante ut vehicula. Nullam nec lorem mauris. Praesent sed gravida libero. Morbi id mollis dolor.
                        Nunc condimentum accumsan sem, rutrum hendrerit turpis dapibus sodales.</p>
                </div>
                <div id="tendenciasID">
                    <p id="tituloFilme">
                        <img src="https://s.aficionados.com.br/imagens/img-20210629-201036_cke.jpg" alt="" />
                        <h2>Bad Fallen</h2>
                    </p>
                    <p id="textoTendencias">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lectus a augue fringilla gravida. Aliquam erat volutpat. Donec imperdiet tellus mauris.
                        In porta tempus ante ut vehicula. Nullam nec lorem mauris. Praesent sed gravida libero. Morbi id mollis dolor.
                        Nunc condimentum accumsan sem, rutrum hendrerit turpis dapibus sodales.</p>
                </div>
            </div>
        </div>
    );
}

export default Tendencies;
