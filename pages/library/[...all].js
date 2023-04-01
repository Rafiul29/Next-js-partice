import { useRouter } from "next/router"


export default function Documentation() {
const {query:{all=[]}} =useRouter()

console.log(all)
if(all.length===4){
    return(
        <p>Documentation for topic: {all[0]}---{all[1]}---{all[2]}---{all[3]}</p>
    )
}

if(all.length==3){
    return(
        <p>Documentation for topic: {all[0]}---{all[1]}---{all[2]}</p>
    )
}

if(all.length==2){
    return(
        <p>Documentation for topic: {all[0]}---{all[1]} </p>
    )
}

if(all.length==1){
    return(
        <p>Documentation for topic: {all[0]}{all[2]}---</p>
    )
}
  return (
    <div>Documentation</div>
  )
}
