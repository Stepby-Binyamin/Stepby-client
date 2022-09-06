import Swipe from "../../components/all/Swipe"


export default function Shmuel() {
   function func() {
      console.log("Enter function")
   }
   return (
      <>
         <Swipe onSwipe={func} ></Swipe>
      </>
   )
}
