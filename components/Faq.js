
import Accordion from './Accordion';

const Faq = () => {

    const accordionData = [
        {
          title: 'How to watch free movies',
          content: `Watching free movies on the Internet can be done in several ways. If the movie is available for streaming, a movie screen will appear on your browsers window.
          Some browsers (like older versions of Explorer, Safari or Firefox) may not have an updated Java script or Flash to play the movie. In that case, you will need to update your browser.
          Some portable devices might require the movie to be in a certain format (like MPG, AVI, etc.). Once the correct format is set, the file can be transferred to the device.
          Using mobile devices pose other problems. Many people are unaware that when a movie or TV show is playing while using a cellular connection, the network (AT&T, Verizon, Sprint, etc.) may charge for digital use. There are ways to work around this. Learn how to watch movies using mobile devices.`
        },
        {
          title: 'How to download movies',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: 'Do I have to have an account?',
          content: `No, you do not. You will need an account if you would like to access certain account features like rating movies and maintaining your favorites and/or watchlist. You will also need an account to edit data.`
        },
        {
            title: 'Does it cost to use the site?',
            content: `No, you do not. You will need an account if you would like to access certain account features like rating movies and maintaining your favorites and/or watchlist. You will also need an account to edit data.`
        },
        {
            title: 'Why cant I find what I am looking for?',
            content: `There are two common scenarios. First, the media has not been added to our database yet. Second, it could be a misspelling, typo or foreign language issue.
                      Movies and TV shows support translated titles as well as what we call "Alternative Titles". A lot of times the issue is simply that the translated or alternative title hasn't been added.`
        },
        {
            title: 'Do you have social features?',
            content: `We support connecting your Twitter and Facebook accounts for easy sharing of movies and TV shows.`
        }
      ];
      

    return ( 
        <section className="faq section-top section-bottom">
            <div className="container">
                <div className="faq__heading">
                    <div className="faq__title">
                        <h2>Frequent Ask Question</h2>
                    </div>
                    <div className="__content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi quae magnam, aut rem aliquid.
                        </p>
                    </div>
                </div>
                <div className="accordion">
                    {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} key={title} />
                    ))}
                 </div>
                <div className='faq__side-bg'>

                </div>
            </div>
        </section>
     );
}
 
export default Faq;