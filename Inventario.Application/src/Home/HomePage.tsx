import React from 'react';
import { Container } from 'react-bootstrap';

function HomePage() {
    return (
        <Container>
            <h2>Entendendo as Tecnologias por Trás do Sistema de Controle de Compras de Casa</h2>
            <p>Imagine que você tem um aplicativo para ajudar a gerenciar as compras de casa de forma prática e eficiente. Para fazer isso, várias tecnologias são usadas para garantir que tudo funcione bem. Vamos entender cada uma delas de uma forma simples:</p>
            <h2>React com TypeScript</h2>
            <p>Pense no React como uma ferramenta que ajuda a construir a parte visual do aplicativo, como se fosse o design das páginas que você vê quando usa o app. É como montar um quebra-cabeça, onde cada peça representa uma parte da tela. O TypeScript é um complemento para o React que ajuda a garantir que essas peças se encaixem corretamente, oferecendo uma forma mais segura e organizada de construir o aplicativo.</p>

            <h3>Backend .NET Core</h3>
            <p>O "backend" é como a parte de trás do aplicativo que não aparece para os usuários, mas é responsável por processar todas as informações e garantir que tudo funcione conforme esperado. O .NET Core é a tecnologia que gerencia essas operações. É como a cozinha de um restaurante: enquanto você vê a comida pronta, a cozinha está trabalhando para prepará-la. O .NET Core ajuda a gerenciar e organizar esses processos de forma eficiente.</p>

            <h3>Base de Dados SQLite</h3>
            <p>Toda informação precisa ser armazenada em algum lugar. A SQLite é uma tecnologia usada para guardar dados de forma compacta e prática. É como um arquivo no seu computador onde você salva suas informações; no caso do aplicativo, é onde todas as suas compras e detalhes são armazenados de forma organizada e segura.</p>

            <h3>Docker para CI/CD</h3>
            <p>Docker é uma ferramenta que ajuda a criar um ambiente consistente para o desenvolvimento e execução do aplicativo, garantindo que ele funcione da mesma maneira em diferentes máquinas. Já CI/CD (Integração Contínua e Entrega Contínua) é um processo que automatiza a atualização e melhoria do aplicativo, garantindo que ele sempre esteja funcionando bem e recebendo novas melhorias sem problemas.</p>

            <p>Em resumo, essas tecnologias trabalham juntas para criar um sistema de controle de compras de casa que é fácil de usar, confiável e eficiente. Cada uma delas tem um papel específico, ajudando a garantir que seu aplicativo funcione bem e ofereça uma ótima experiência para você.</p>
        </Container>
    );
}

export default HomePage;