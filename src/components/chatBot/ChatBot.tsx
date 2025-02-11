import "./chatBot.scss";

import leAlfredPP from '../../assets/images/leAlfred.webp'

import { IoMdClose } from "react-icons/io";
import { BiSend } from "react-icons/bi";

import { ReactElement } from "react";

export default function ChatBot(): ReactElement {
  return (
    <section id={"chatBot"}>
      <div className={"chatBotHeader"}>
        <figure>
          <img src={leAlfredPP} alt={"Chat bot logo"} />
        </figure>
        <h2>Le Alfred</h2>
        <IoMdClose className={'closeIcon'} />
      </div>
      <div className={"chatBotBody"}></div>
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
