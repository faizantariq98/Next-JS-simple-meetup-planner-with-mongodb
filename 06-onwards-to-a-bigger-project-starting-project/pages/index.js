import Head from 'next/head';
import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from 'mongodb';
import { Fragment } from 'react';

const HomePage = (props) => {
  return (
        <Fragment>
          <Head>
            <tit>React Meetups</tit>
            <meta name="description" content="Browse a huge list of highly active react meetups"></meta>
          </Head>
          <MeetupList meetups={props.meetups} />
        </Fragment>
        
  );
}

export async function getStaticProps(){
    const client= await MongoClient.connect('mongodb+srv://faizan123:YLyS1T4nmO25qeH7@devconnector.snepd.mongodb.net/meetups?retryWrites=true&w=majority')

  const db= client.db();

  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find().toArray();
  client.close();

  return{
    props:{
      meetups:meetups.map((meetup)=>({
        title:meetup.title,
        address: meetup.address,
        image:meetup.image,
        id:meetup._id.toString()
      }))
    },
    revalidate:1
  }
}

export default HomePage;