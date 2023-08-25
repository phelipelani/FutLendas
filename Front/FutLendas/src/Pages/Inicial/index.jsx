import Logo from "../../Assets/Logo.png"

export const InicialPage = () => {
    

    return (
        <main>
            <div>
                <img src={Logo} alt="Logo Fut Lendas" />
                <p>Junte as lendas para o maior santuário de lendas das ruas</p>
            </div>
            <div>
           
                <button type="button">Entrar</button>
                <button type="button">Cadastrar</button>
            </div>
        </main>
    )
};
