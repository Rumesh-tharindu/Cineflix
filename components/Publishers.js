import Image from 'next/image'
import publisherA from '../public/publishers/Aafilms.jpg';
import publisherB from '../public/publishers/amir-khan.jpg';
import publisherC from '../public/publishers/cinestan.jpg';
import publisherD from '../public/publishers/dhara.jpg';
import publisherE from '../public/publishers/Eros.jpg';
import publisherF from '../public/publishers/excel.jpg';
import publisherG from '../public/publishers/m-films.jpg';
import publisherH from '../public/publishers/niig.jpg';
import publisherI from '../public/publishers/red-e.jpg';
import publisherJ from '../public/publishers/reliance.jpg';
import publisherK from '../public/publishers/RHF.jpg';
import publisherL from '../public/publishers/UTV.jpg';
import publisherM from '../public/publishers/yash.jpg';



const Publishers = () => {
    return ( 
        <section className="publishers section-top">
            <div className="publishers__heading">
                <div className="container">
                    <div className="pulishers__title">
                        <h2>Meet a few of our amazing proudction companies.</h2>
                    </div>
                    <div className="publishers__content">
                        <p>
                        Carbon offers exclusive advertising access on 600+ hand-picked websites and apps in the design, development, and tech spaces. The network is segmented by audience so you can run targeted campaigns at scale. Some of our network members include:
                        </p>
                    </div>
                 </div>
            </div>
            <div className="publishers__listings">
                <div className="container">
                    <div className="publishers__cols">
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherA}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>AA Films</p>
                                    </div>
                               </div>
                        </a>

                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherB}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>Amir Films</p>
                                    </div>
                               </div>
                        </a>
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherC}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>Cinestan</p>
                                    </div>
                               </div>
                        </a>
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherD}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>Dharma</p>
                                    </div>
                               </div>
                        </a>
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherE}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>Eros</p>
                                    </div>
                               </div>
                        </a>
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherF}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>Excel</p>
                                    </div>
                               </div>
                        </a>
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherG}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>AA Films</p>
                                    </div>
                               </div>
                        </a>
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherH}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>Niig</p>
                                    </div>
                               </div>
                        </a>
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherI}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>Red chillies</p>
                                    </div>
                               </div>
                        </a>
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherJ}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>Reliance</p>
                                    </div>
                               </div>
                        </a>
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherK}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>RHF</p>
                                    </div>
                               </div>
                        </a>
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherL}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>UTVs</p>
                                    </div>
                               </div>
                        </a>
                        <a href="" className="publishers__listing">
                               <div className="publishers__listing-inner">
                                    <div className="img-wrapper">
                                        <Image
                                         src = {publisherM}
                                         />
                                    </div>
                                    <div className="publishers__listing-content">
                                        <p>Yash</p>
                                    </div>
                               </div>
                        </a>
                    </div>
                </div>
            </div>

          
        </section>
     );
}
 
export default Publishers;