import Answer from "../../components/all/Answer"

export default function Shmuel() {

   const title = "gggg "
   const p = "ffff"
   const isTitleFirst = true

   return (
      <>
         <Answer src={"/images/icons/upload.svg"} isAdmin={true} title={title} p={p} isTitleFirst={isTitleFirst} isDone={true} onClick={""} />
      </>
   )
}
