import { useNavigate } from "react-router-dom";
import logo from "../../assets/rocket-chat.png";

export const Register = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="lg:max-w-7xl min-h-screen lg:mx-auto lg:pt-20 lg:px-6 flex justify-center items-center">
      <div className="sm:w-96 h-auto bg-gradient-to-r  from-blue-500 to-blue-800 rounded-md text-white flex flex-col items-center">
        <div className="w-full text-right h-5">
          <button
            className="w-5 h-5 mx-1 my-1 exit"
            onClick={handleExit}
          ></button>
        </div>
        <div>
          <img className="w-16 h-16 mb-3" src={logo} alt="rocket" />
        </div>
        <div className="flex flex-col w-64 mx-auto gap-3 pl-2">
          <div>
            <label htmlFor="">Nome</label>
            <input
              className=" text-black bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out shadow-sm"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Usuário</label>
            <input
              className=" text-black bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out shadow-sm"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input
              className=" text-black bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out shadow-sm"
              type="password"
            />
          </div>
          <div>
            <button className=" mb-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 shadow-lg">
              Criar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
