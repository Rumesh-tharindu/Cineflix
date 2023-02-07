import Player from '../components/VideoPlayer';
const Watch = () => {
    return ( 
        <div className="video">
            <div className="container">
                <div className="video__player">
                    <Player />
                    <div className="video__description">
                        <div className="video__title">
                            <h3>Gajman 2022</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Watch;