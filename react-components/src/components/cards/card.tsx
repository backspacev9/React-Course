import * as React from 'react';
import * as Constants from '../../constants';
import { MusicCard } from '../../Interfaces/musicCard';

export default function Card(prop: MusicCard): JSX.Element {
  return (
    <div className="card">
      <img src={prop.imgAlbum} alt="" />
      <div className="hiddenDiv">
        <div
          className="btnPlay"
          onClick={(ev) => {
            alert(prop.tittle);
          }}
        >
          play
        </div>
        <div className="cardContent">
          <span className="songName">{`${prop.artist} - ${prop.tittle}`}</span>
          <span className="albumName">{prop.album}</span>
        </div>
      </div>
    </div>
  );
}
