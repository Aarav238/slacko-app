import { useState } from "react";
import { useChatContext } from "stream-chat-react";
import styled from "styled-components";


const Form = styled.form`

`;

export default function CreateChannel({onClose}){
    const {client} = useChatContext;

    const[name,setName] = useState("");
    const[image,setImage] = useState("");
    const[desc,setDesc] = useState("");

    return (
        <Form>
        <div className="input-group">
        <label htmlFor="name">Channel Name</label>
            <input id="name" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="input-group">
        <label htmlFor="image">Channel Image URL</label>
            <input id="image" onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div className="input-group">
        <label htmlFor="desc">Channel Description</label>
            <textarea id="desc" onChange={(e) => setDesc(e.target.value)}/>
        </div>

        <div className="submit">
            <button type="submit">Create Channel</button>
        </div>
        </Form>
    )

    
}
