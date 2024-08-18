import L from "/L.jpeg"
import Jean from "/Jean.jpeg"
import Leikan from "/Leikan.jpeg"
import Coracao from "/Coracao.png"

export default function Home() {
  return (
    <div>
        <header className="w-full flex justify-center bg-black fixed">
            <a href="/Troll"><img src={L} alt="L com coração" className="w-20"/></a>
        </header>

        <section className="pt-24 bg-gray text-tex flex flex-col justify-center px-8">
            <div>
                <h1 className="mt-4 mb-6 text-2xl px-12 font-bold text-center">Esse é um site para você, Leikan...</h1>
            </div>

            <div>
                <p className="mb-3">Tem sido 1 ano desde que nos conhecemos.... Um longo ano.</p>

                <p className="mb-96">Alguns momentos no qual estivemos bem próximos...</p>
            </div>

            <div>
                <p className="text-end mb-96">Alguns outros, onde estivemos bem, bem distantes...</p>
            </div>

            <div>
                <p className="text-center mb-10">mas, algo nunca mudou.</p>
            </div>

            <div>
                <p className="mb-10">Durante esse ano, nunca deixamos nossa amizade apagar.</p>
            </div>

            <div className="flex flex-col gap-10">
                <p className="text-end">Começamos de uma maneira parecida. </p>

                <p className="text-start mb-96"> Ambos estavamos afundados em um mar de pesadelos...</p>
            </div>

            <div className="flex flex-col gap-10">
                <p className="text-center">Porém...</p>

                <p className="text-center mb-96">Aos poucos isso melhorou.</p>
            </div>

            <div>
                <p className="mb-10">A gente se conheceu melhor, e então tudo se intensificou.</p>
            </div>

            <div>
                <p className="text-center mb-96">Uma ótima personalidade, gostos levemente semelhantes, você me deu um presente entrando na minha vida.</p>
            </div>

            <div>
                <p className="mb-10">Meu mundo sombrio se mostrou não tão escuro com o caminho que você me mostrou...</p>
            </div>

            <div>
                <p className="text-end mb-96">Eu quero poder ser alguém bom para você, então me ajude nessa jornada, me ajude a ser melhor.</p>
            </div>

            <div className="flex flex-col items-center gap-10 mb-96"> 
                <p className="text-xl font-bold">Você...</p>

                <img src={Leikan} alt="Foto da Leikan" />
            </div>

            <div className="flex flex-col items-center gap-10 mb-96">
                <p className="text-xl font-bold">Eu...</p>

                <img src={Jean} alt="Foto do Jean" />
            </div>

            <div className="mb-96">
                <p>E claro, juntos... Pois você faz parte de mim, do meu coração.</p>

                <img src={Coracao} alt="Meu coração preenchido por você." />
            </div>

            <div className="mb-96">
                <p>Dedico esse site a você, para falar que algo que falo sempre, mas que gostaria de te relembrar...</p>
            </div>

            <div>
                <h1 className="text-center text-4xl font-bold mb-96">Eu te amo.</h1>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-center mb-96">Agradeço por estar comigo, e espero que possa continuar com você por tanto tempo a ponto de eu nem conseguir contar mais. Obrigado.</h2>
            </div>

            <div>
                <p className="mb-8 text-center">Agora, há uma surpresa te seguindo do topo do site até aqui. Tente vê-la.</p>
            </div>
        </section>

        
    </div>
  )
}
