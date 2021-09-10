import ChatCard from "./ChatCard";
import {
  IonItem,
  IonAvatar,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonApp,
} from "@ionic/react";
import MenuBar from "../FooterMenu/MenuBar";

const Chat: React.FC = () => {
  return (
    <IonApp>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle>List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </IonContent>
      <MenuBar />
    </IonApp>
  );
};
export default Chat;
