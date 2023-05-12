import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import { ThirdComponent } from './FirstComponent';
import LearningJavaScript from './LearningJavaScript';

export default function LearningComponents() {
  return (
    <div className="LearningComponents">
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
      <LearningJavaScript/>

    </div>
  );
}