import SwipeDown from "../../components/all/SwipeDown"


export default function Shmuel() {
   function func() {
      console.log("Enter function")
   }
   return (
      <>
         <SwipeDown onSwipe={func} ></SwipeDown>
      </>
   )
}
