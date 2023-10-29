import React, { useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Footer(props) {
  const [song,setSong] = useState('https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-FLAC-File.flac');


  useEffect(()=>{
      getSongs();
  },[])

   const getSongs =  async () => {

    const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '802ff464d4mshe7a6c8f6e93846ap172fd3jsn1763132a9d8d',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }

   }

  const nextSong = () =>{
      console.log("next song");
      setSong('https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav');
  }

  const prevSong = () =>{
    console.log("prev song");
    setSong('https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav')
  }

  const listen = (e) =>{
    console.log("e",e);
  }
  return (
    <div className='container-fluid'>
      <AudioPlayer
      autoPlay
      src={song}
      onPlay={e => console.log("onPlay")}
      onClickNext={()=>nextSong()}
      onClickPrevious={()=>prevSong()}
      showJumpControls={true}
      showSkipControls={true}
      onListen={(e)=>listen(e)}
      listenInterval={(listen)=>console.log(listen)}
      onSeeked={(seek)=>console.log(seek)}
      onEnded={(end)=>nextSong()}
      // other props here
    />
    </div>
  )
}
