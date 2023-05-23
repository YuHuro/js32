import { useState } from "react"


function Message() {
    
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: 'Hi, how are you?',
            author: 'Admin',
            side: 'inbox'
        },
        {
            id: 2,
            text: 'Hi, i am fine',
            author: 'User',
            side: 'outbox'
        },
        {
            id: 3,
            text: 'Hi, d1avala',
            author: 'Admin',
            side: 'inbox'
        },
    ]);

    const handlerRemove = (id) =>{
        setMessages(messages.filter(item =>{
            if(id === item.id){
                return false
            }
            return true
        }))
    }

    return (
        <div>
            {
                messages.map(item =>{
                    return (
                        <div className={`row mb-2 ${item.side === 'outbox' ? 'justify-content-end' : ''}`}>
                            <div className="col-5">
                                <div className={item.side}>
                                    {item.text}
                                    <div>
                                        {item.author}
                                    </div>
                                    <button onClick={() => handlerRemove(item.id)}> 
                                        X
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
        
}

export default Message;