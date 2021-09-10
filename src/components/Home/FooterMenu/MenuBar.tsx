import "./MenuBar.css";
import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";
import { chatboxEllipses, people, settings } from "ionicons/icons";

const MenuBar: React.FC = () => {
  return (
    <div className="fContainer">
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule">
          <IonIcon icon={chatboxEllipses} />
          <IonLabel>Chat</IonLabel>
          <IonBadge>6</IonBadge>
        </IonTabButton>

        <IonTabButton tab="speakers">
          <IonIcon icon={people} />
          <IonLabel>Friends</IonLabel>
        </IonTabButton>

        <IonTabButton tab="map">
          <IonIcon icon={settings} />
          <IonLabel>settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </div>
  );
};

export default MenuBar;
