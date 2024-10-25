import movie1 from "../assets/video1.mp4";
import movie2 from "../assets/video2.mp4";

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20" id="inicio">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Ferramentas Virtuais
        <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Para Evoluir Seu Negócio{" "}
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        A construção de sites e sistemas é vital para alavancar um negócio. Um
        site bem projetado serve como vitrine, tornando produtos e serviços
        acessíveis.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md transition duration-700 ease-in-out hover:from-blue-800 hover:to-blue-500"
        >
          Começar
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border transition duration-300 ease-in-out transform hover:scale-105"
        >
          Documentação
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-700 shadow-blue-400 mx-2 my-4"
        >
          <source src={movie1} type="video/mp4" />
          Seu navegador não suporta o video
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-700 shadow-blue-400 mx-2 my-4"
        >
          <source src={movie2} type="video/mp4" />
          Seu navegador não suporta o video
        </video>
      </div>
    </div>
  );
};
