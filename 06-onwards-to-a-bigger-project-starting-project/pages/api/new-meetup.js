import {MongoClient} from 'mongodb';

async function handler(req,res){
    if(req.method==='POST'){
        const data= req.body;
        const {title, image, description,address}=data;
        const client= await MongoClient.connect('mongodb+srv://faizan123:YLyS1T4nmO25qeH7@devconnector.snepd.mongodb.net/meetups?retryWrites=true&w=majority')
        const db= client.db();
        const meetupCollection = db.collection('meetups');
        const result=await meetupCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message:'Meetup Inserted'})


    }
}
export default handler;