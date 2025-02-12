import "./chatBot.scss";

import leAlfredPP from '../../assets/images/leAlfred.webp'

import { IoMdClose } from "react-icons/io";
import { BiSend } from "react-icons/bi";

import { ReactElement } from "react";

interface IChatMessage {
    message: string
}

export default function ChatBot(): ReactElement {
    const chatBotMockupMessage: string[] = [
        "Bonjour, je suis le Alfred, un robot intelligent qui peut vous aider à résoudre vos problèmes.",
        "Je suis capable de comprendre et de répondre à vos questions, mais je ne suis pas capable de vous donner des conseils ou de vous aider à résoudre des problèmes.",
        "Si vous avez des questions ou des problèmes, n'hésitez pas à me poser des questions. Je suis là pour vous aider.",
    ]

    const ChatBotMessage = ({message}: IChatMessage): ReactElement => {
        return (
            <p className={"chatBotMessage"}>{message}</p>
        )
    }

    const UserMessage = ({message}: IChatMessage): ReactElement => {
        return (
            <p className={'userMessage'}>{message}</p>
        )
    }


  return (
    <section id={"chatBot"}>
      <div className={"chatBotHeader"}>
        <figure>
          <img src={leAlfredPP} alt={"Chat bot logo"} />
        </figure>
        <h2>Le Alfred</h2>
        <IoMdClose className={'closeIcon'} />
      </div>
      <div className={"chatBotBody"}>
          <UserMessage message={"PTDR t'es qui ?!"} />
          <ChatBotMessage message={chatBotMockupMessage[0]} />
          <UserMessage message={"Ah rien, vla l'état du gars mdr"} />
          <ChatBotMessage message={chatBotMockupMessage[1]} />
      </div>
      <div className={"chatBotFooter"}>
        <label htmlFor={"inputText"}>Entrez votre message</label>
        <div className={"inputWrapper"}>
          <input id={"inputText"} type={"text"} />
          <BiSend className={'sendIcon'} />
        </div>
      </div>
    </section>
  );
}
