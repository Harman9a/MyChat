import { useHistory } from "react-router-dom";
import { IonItem, IonAvatar, IonLabel } from "@ionic/react";
const ChatCard: React.FC = () => {
  const history = useHistory();
  return (
    <IonItem onClick={() => history.push("/chat")}>
      <IonAvatar slot="start">
        <img src="./img/one.jfif" />
      </IonAvatar>
      <IonLabel>
        <h2>Finn</h2>
        <h3>I'm a big deal</h3>
        <p>Listen, I've had a pretty messed up day...</p>
      </IonLabel>
    </IonItem>
  );
};
export default ChatCard;
