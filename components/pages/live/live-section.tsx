'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

interface IResponseData {
  _id: string;
  createdAt: Date;
  diaAgendamento: string;
  streamerAgendado10: string;
  streamerAgendado12: string;
  streamerAgendado14: string;
  streamerAgendado16: string;
  streamerAgendado18: string;
  streamerAgendado20: string;
  streamerAgendado22: string;
}

const LiveSection = () => {

  let horaTeste: number;
  let onLiveStreamer = 'horadrage';

  // Função para fazer a chamada à API
  const fetchDataFromAPI = async () => {
    try {
        let streamerTwitch: string = '';
        const hojeHora = new Date().getUTCHours();
        if(hojeHora == horaTeste) return;
        horaTeste = hojeHora;
        const hojeData = new Date().toLocaleDateString('pt-br');
        const response = await axios.get(`https://go-team-mongo-api.onrender.com/agendamento?diaAgendamento=${hojeData}`);
        const responseData: IResponseData = response.data;

        if(hojeHora >= 13 && hojeHora < 15) streamerTwitch = responseData.streamerAgendado10
        if(hojeHora >= 15 && hojeHora < 17) streamerTwitch = responseData.streamerAgendado12
        if(hojeHora >= 17 && hojeHora < 19) streamerTwitch = responseData.streamerAgendado14
        if(hojeHora >= 19 && hojeHora < 21) streamerTwitch = responseData.streamerAgendado16
        if(hojeHora >= 21 && hojeHora < 23) streamerTwitch = responseData.streamerAgendado18
        if(hojeHora == 23 || hojeHora == 0) streamerTwitch = responseData.streamerAgendado20
        if(hojeHora >= 1 && hojeHora < 3) streamerTwitch = responseData.streamerAgendado22

        if(streamerTwitch == 'nenhum') onLiveStreamer = 'twitch.tv/horadrage';

        onLiveStreamer = streamerTwitch.split('/')[1].toLocaleLowerCase();

        
        
        const urlAtualFrame = document.querySelector('#twitchFrame')?.getAttribute('src')
        const newUrlFrame = `https://player.twitch.tv?autoplay=true&channel=${onLiveStreamer}&height=100%25&muted=false&parent=go-team.vercel.app&referrer=https%3A%2F%2Fwww.baiano.tv%2Fmulti%2F&width=100%25`
        if(urlAtualFrame == newUrlFrame) return;
        document.querySelector('#twitchFrame')?.setAttribute('src', `https://player.twitch.tv?autoplay=true&channel=${onLiveStreamer}&height=100%25&muted=false&parent=go-team.vercel.app&referrer=https%3A%2F%2Fwww.baiano.tv%2Fmulti%2F&width=100%25`)
        document.querySelector('#twitchChat')?.setAttribute('src', `https://www.twitch.tv/embed/${onLiveStreamer}/chat?&darkpopout&parent=go-team.vercel.app`)
        
    } catch (error) {
      console.error('Erro na consulta à API:', error);
    }
  };

  // Chamada inicial da API ao montar o componente
  useEffect(() => {
    fetchDataFromAPI();

    // Define o intervalo de tempo (em milissegundos) para fazer a consulta periódica
    const interval = setInterval(() => {
      fetchDataFromAPI();
    }, 30000); // Consulta a cada 5 segundos (ajuste conforme necessário)

    // Limpe o intervalo quando o componente for desmontado para evitar vazamentos de memória
    return () => clearInterval(interval);
  }, [onLiveStreamer]);

  // Renderize o conteúdo conforme necessário
  return (
    <div>
      <div className='flex lg:justify-around lg:flex-row flex-col justify-center items-center lg:mt-10 lg:mb-5'>
        <div className='h-[60vh] lg:w-[60vw] w-[80vw] items-center'>
          <iframe id='twitchFrame' src={`https://player.twitch.tv?autoplay=true&channel=${onLiveStreamer}&height=100%25&muted=false&parent=go-team.vercel.app&width=100%25`} scrolling="no" allow="autoplay; fullscreen" title="Twitch" sandbox="allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" width="100%" height="100%"></iframe>
        </div>
        <div className='h-[60vh] lg:my-0 my-5'>
          <iframe id='twitchChat' className='h-[100%]' src={`https://www.twitch.tv/embed/${onLiveStreamer}/chat?&darkpopout&parent=go-team.vercel.app`}></iframe>
        </div>
      </div>
    </div>
  );
};

export default LiveSection;