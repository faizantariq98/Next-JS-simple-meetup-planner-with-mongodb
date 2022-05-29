import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import {useRouter} from 'next/router'
const newMeetup = () => {
  const router= useRouter();
    async function addMeetupHandler(enteredMeetupData){
     
        const response=await fetch('/api/new-meetup',{
          method:'POST',
          body:JSON.stringify(enteredMeetupData),
          headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
          }
        })
        const data= await response.json();
        console.log(data);
        router.replace('/');
    }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
} 

export default newMeetup