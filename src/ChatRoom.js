import { getFirestore, collection, doc, query, limit, serverTimestamp, setDoc, orderBy } from '@firebase/firestore'
import React, { useRef, useState, useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';



const ChatRoom = ({app, currentUser}) => {


    useEffect(() => {
        lastOne.current.scrollIntoView({
            behavior: 'smooth'
        })
        
    })

    const firestore = getFirestore(app);
    const messagesRef = collection(firestore,'testing');    

    
    const documentReference = doc(messagesRef)    
    

    const answer = query(messagesRef, limit(25), orderBy('createdAt'));
    
    const [inputValue, setInputValue] = useState('');

    const [messages] = useCollectionData (answer, {idField: 'id'});

    const lastOne = useRef()



    const sendMessage = async (e)=>{
        e.preventDefault();

        const { uid, photoURL } = currentUser;
        

        await setDoc(documentReference, {
            text: inputValue,
            createdAt: serverTimestamp(),
            uid,
            photoURL
        })

        setInputValue('');

        lastOne.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <>
            <main>
                {messages && messages.map(message => <Message key={message.id} data={message} currentUser={currentUser}/>)}
                <div ref={lastOne}></div>
            </main>

            <form onSubmit={(sendMessage)}>
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>

                <button type="submit">{'=>'}</button>

            </form>
        </>
    )
}

const Message = ({data, currentUser})=>{
    const { text, uid, photoURL } = data;

    const messageStyle = (uid === currentUser.uid) ? 'sent' : 'received';

    return (
        <div className={`message ${messageStyle}`}>
            <img src={photoURL} alt='sender'/>
            <p>
                {text}
            </p>
        </div>
    )
}

export default ChatRoom
