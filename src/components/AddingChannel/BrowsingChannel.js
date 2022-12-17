import { useEffect, useState } from "react";
import {  useChatContext } from "stream-chat-react";
import styled from "styled-components";
 const Container = styled.div`
 
 `

 export default function BrowsingChannel(){

    const {client} = useChatContext()
  
    const[channels,setChannels] = useState([])

    const [loadingChannels , setLoadingChannels] = useState(true)
    useEffect (() => {
        const fetchChannels = async () => {
            const response = await client.queryChannels()

            const filteredChannels = response.filter(c => c.type === "team")
            setChannels(filteredChannels)
            setLoadingChannels(true);
        }

        fetchChannels()
    },[])
    
    return <Container>
        {loadingChannels ? (<div className="loading-text">Loading Channels...</div>) : (channels.map((c) => <></>)
        )}
    </Container>
    
 }