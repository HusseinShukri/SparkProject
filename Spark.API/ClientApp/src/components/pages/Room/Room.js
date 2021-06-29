import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import Moment from 'moment';
import Nav from './Navss';
import openSocket from "socket.io-client";
const Page = styled.div`
  display: flex;
  flex-direction:row;
  height: 100%;
  width: 100%;
  align-items: left;
  background-color:#191970;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;
const Container2 = styled.div`
    padding: 20px;
    display: flex;
    height: 100%;
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
`;
const Chat = styled.div`
margin-left: 2em;
margin-right: 2em;
padding: 20px;
margin-right: "auto";
item-align: right;

`;
const Videos = styled.div`

margin-right: 1em;
padding: 20px;
flexDirection: "row",
justifyContent: "flex-end"
margin-right: "auto";
`;
const TextArea = styled.textarea`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  color: lightgray;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
`;
const Button = styled.button`
  background-color: pink;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #46516e;
  font-size: 17px;
`;
const Form = styled.form`
  width: 400px;
`;
const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
const MyMessage = styled.div`
  width: 45%;
  background-color: pink;
  color: #46516e;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;
const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;
const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: lightgray;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;
const ChatDate = styled.div`
  display: block;
  font-size: 10px;
  font-style: italic;
  color: #777;
  height: 15px;
  left: 10%;
  right:10%;
  background-color: black;
  text-align: center;

  `;
const StyledVideo = styled.video`
height: 40%;
width: 50%;
`;
const date = Moment(new Date()).format('HH:mm:ss');
const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <StyledVideo playsInline autoPlay ref={ref} />
    );
}

const Room = (props) => {
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const userVideo = useRef();
    const partnerVideo = useRef();
    const peerRef = useRef();
    const socketRef = useRef();
    const otherUser = useRef();
    const userStream = useRef();
    const senders = useRef([]);
    useEffect(() => {

        socketRef.current = io.connect('localhost:9555');
        console.log('check 1', socketRef.current.connected);

        socketRef.current.on("your id", id => {
            setYourID(id);
        })
        socketRef.current.on("message", (message) => {
            console.log("here");
            receivedMessage(message);
        })
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
            userVideo.current.srcObject = stream;
            userStream.current = stream;
            socketRef.current.emit("join room", props.match.params.roomID);

            socketRef.current.on('other user', userID => {
                callUser(userID);
                otherUser.current = userID;
            });

            socketRef.current.on("user joined", userID => {
                otherUser.current = userID;
            });

            socketRef.current.on("offer", handleRecieveCall);

            socketRef.current.on("answer", handleAnswer);

            socketRef.current.on("ice-candidate", handleNewICECandidateMsg);
        });
    }, []);

    function receivedMessage(message) {
        setMessages(oldMsgs => [...oldMsgs, message]);
    }
    function sendMessage(e) {
        e.preventDefault();
        const messageObject = {
            body: message,
            id: yourID,
        };
        setMessage("");
        socketRef.current.emit("send message", messageObject);
    }
    function handleChange(e) {
        setMessage(e.target.value);
    }
    function callUser(userID) {
        peerRef.current = createPeer(userID);
        userStream.current.getTracks().forEach(track => senders.current.push(peerRef.current.addTrack(track, userStream.current)));
    }
    function createPeer(userID) {
        const peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                },
                {
                    urls: 'turn:numb.viagenie.ca',
                    credential: 'muazkh',
                    username: 'webrtc@live.com'
                },
            ]
        });

        peer.onicecandidate = handleICECandidateEvent;
        peer.ontrack = handleTrackEvent;
        peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

        return peer;
    }
    function handleNegotiationNeededEvent(userID) {
        peerRef.current.createOffer().then(offer => {
            return peerRef.current.setLocalDescription(offer);
        }).then(() => {
            const payload = {
                target: userID,
                caller: socketRef.current.id,
                sdp: peerRef.current.localDescription
            };
            socketRef.current.emit("offer", payload);
        }).catch(e => console.log(e));
    }
    function handleRecieveCall(incoming) {
        peerRef.current = createPeer();
        const desc = new RTCSessionDescription(incoming.sdp);
        peerRef.current.setRemoteDescription(desc).then(() => {
            userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
        }).then(() => {
            return peerRef.current.createAnswer();
        }).then(answer => {
            return peerRef.current.setLocalDescription(answer);
        }).then(() => {
            const payload = {
                target: incoming.caller,
                caller: socketRef.current.id,
                sdp: peerRef.current.localDescription
            }
            socketRef.current.emit("answer", payload);
        })
    }
    function handleAnswer(message) {
        const desc = new RTCSessionDescription(message.sdp);
        peerRef.current.setRemoteDescription(desc).catch(e => console.log(e));
    }
    function handleICECandidateEvent(e) {
        if (e.candidate) {
            const payload = {
                target: otherUser.current,
                candidate: e.candidate,
            }
            socketRef.current.emit("ice-candidate", payload);
        }
    }
    function handleNewICECandidateMsg(incoming) {
        const candidate = new RTCIceCandidate(incoming);

        peerRef.current.addIceCandidate(candidate)
            .catch(e => console.log(e));
    }
    function handleTrackEvent(e) {
        partnerVideo.current.srcObject = e.streams[0];
    };
    function muteAudio() {
        var socket = io.connect();
        console.log('check 1', socketRef.current.connected);
        socket.on('connect', function () {
            console.log('check 1', socketRef.current.connected);
        });
    }
    function shareScreen() {
        navigator.mediaDevices.getDisplayMedia({ cursor: true }).then(stream => {
            const screenTrack = stream.getTracks()[0];
            senders.current.find(sender => sender.track.kind === 'video').replaceTrack(screenTrack);
            screenTrack.onended = function () {
                senders.current.find(sender => sender.track.kind === "video").replaceTrack(userStream.current.getTracks()[1]);
            }
        })
    }
    return (
 
         
        <Page>
            <Nav />

            <Videos>
                <Container2>
                    <video controls style={{ height: 300, width: 300 }} autoPlay ref={userVideo} />
                    <video controls style={{ height: 300, width: 300 }} autoPlay ref={partnerVideo} />
                    <li></li>
                    <li></li>

                    <button controls style={{  height: 50, width: 50 }}  onClick={shareScreen}>Share screen</button>
                    <button onClick={muteAudio}>Mute Audio</button>

                </Container2>

            </Videos>
            <Chat>
                <Container>
                    {messages.map((message, index) => {
                        if (message.id === yourID) {
                            return (
                                <MyRow key={index}>
                                    <ChatDate>
                                        {date}
                                    </ChatDate>
                                    <MyMessage>
                                        {message.body}
                                    </MyMessage>

                                </MyRow>
                            )
                        }
                        return (
                            <PartnerRow key={index}>
                                <PartnerMessage>
                                    {message.body}
                                </PartnerMessage>
                                <ChatDate>
                                    {date}
                                </ChatDate>
                            </PartnerRow>
                        )
                    })}
                </Container>

                <Form onSubmit={sendMessage}>
                    <TextArea value={message} onChange={handleChange} placeholder="Say something..." />
                    <Button>Send</Button>
                </Form>

            </Chat>
            
        </Page>




    );
};

export default Room;
