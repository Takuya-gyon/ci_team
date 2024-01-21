import IchidaiMap from './IchidaiMap';
import FudaiMap from './FudaiMap';

export interface Tab {
    label: string;
    content: React.ReactNode;
  }
  
export const tabs: Tab[] = [
{ label: '杉本', content: <IchidaiMap></IchidaiMap> },
{ label: '中百舌鳥', content: <FudaiMap></FudaiMap> }
];