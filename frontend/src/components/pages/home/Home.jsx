import MessageContainer from "../../messages/MessageContainer"
import Sdebar from "../../sidebar/Sdebar"

const Home = () => {
  return (
    <div className=" flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400  bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0">
      <Sdebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
