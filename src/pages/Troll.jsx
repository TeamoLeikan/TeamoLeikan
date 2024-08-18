import pufpuf from "/pufpuf.mp4"
import seta from "/seta.svg"

export default function Troll() {
  return (
    <div className="bg-bla text-white pt-4">
        <a href="/"><img src={seta} alt="Seta para voltar" className="w-12 ms-4 t-4 mb-5 bg-white" /></a>
        <h1 className="mx-10 text-4xl font-bold mb-8">Achou que tinha algo importante aqui? Kkkkkkkkk.</h1>
        <div className="w-full flex justify-center mb-96">
            <video src={pufpuf} className="" autoPlay loop></video>
        </div>

        <h2 className="px-8 text-xl font-semibold pb-8">To zuando. A brincadeira... manda duas perguntas, pode escolher as mais fudidas que você imaginar. Eu escolho uma pra responder e a outra deixar na duvida. :p</h2>
    </div>
  )
}
