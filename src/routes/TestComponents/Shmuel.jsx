import Swipe from "../../components/all/SwipeLeft"


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
