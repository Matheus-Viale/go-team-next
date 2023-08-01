import { Button } from '@/components/global/button';
import Image from 'next/image';
import { TbBrandTwitch, TbBrandTwitter, TbBrandTiktok, TbBrandDiscord, TbBrandInstagram, TbBrandSteam } from 'react-icons/tb';

const MOCK_CONTACTS = [
    {
        url:'https://www.twitch.tv/goteamstreamers',
        icon: <TbBrandTwitch/>
    },
    {
        url:'https://www.instagram.com/goteamstreamers',
        icon: <TbBrandInstagram/>
    },
    {
        url:'https://store.steampowered.com/curator/42609717/',
        icon: <TbBrandSteam/>
    },
    {
        url:'https://twitter.com/goteamstreamers',
        icon: <TbBrandTwitter/>
    },
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[650px] flex flex-col justify-end py-35 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-purple-400">Seja bem-vindo à</p>
                    <h2 className="text-4xl font-medium mt-2">Go Team</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Somos uma comunidade criada para ajudar os streamers a terem mais engajamento, fazer amizades, construir network e tirar dúvidas. Se interessou? Basta clicar no botão abaixo! E também acompanhe nossas redes sociais!</p>
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
                        <a href='https://discord.gg/go-team-streamers-818562930181275740'>
                        <Button className="w-max">
                            <TbBrandDiscord size={18}/>
                            Discord
                        </Button>
                        </a>
                        <div className="flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                               <a 
                                href={contact.url} 
                                key={`contact-${index}`}
                                target="_blank"
                                className="text-2xl text-gray-600 hover:text-gray-100 transition-colors">
                                    {contact.icon}
                               </a> 
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                        width={420}
                        height={280}
                        src="/images/goteamlogogrande.png"
                        alt="Logo Grande da Go Team"
                        className="w-[300px] h-[300px] lg:w-[420px] lg:h-[280px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-fit"
                />
            </div>
        </section>
    )
}