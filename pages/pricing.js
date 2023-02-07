import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faCheck,
    faXmark
  } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
    return ( 
        <section className="pricing section-top section-bottom">
            <div className="container">
               <div className="pricing__title">
                  <h2>Select your pricing plan</h2>
               </div>

               <div className="pricing__cards">
                    <div className="pricing__card">
                        <div className="pricing__card--header">
                            <div className="pricing__card--title">
                                <h3>Basic</h3>
                            </div>
                            <div className="pricing__card--price">
                                <span>Rs</span>
                                <span> 250</span>
                            </div>
                        </div>
                        <div className="pricing__card--list">
                            <ul>
                                <li>
                                    <FontAwesomeIcon
                                    className="check"
                                    icon={faCheck}
                                    />
                                Plays ad
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                    className="Xmark"
                                    icon={faXmark}
                                    />
                                    Download
                                </li>

                                <li>
                                    <FontAwesomeIcon
                                    className="check"
                                    icon={faCheck}
                                    />
                                Accesses only 1 Device
                                </li>

                                <li>
                                    <FontAwesomeIcon
                                    className="Xmark"
                                    icon={faXmark}
                                    />
                                   Mobile account 
                                </li>

                                <li>
                                    <FontAwesomeIcon
                                    className="check"
                                    icon={faCheck}
                                    />
                                    360p
                                </li>
                            </ul>
                        </div>

                        <div className="pricing__card--action">
                            <a>
                                Watch
                            </a>
                        </div>
                    </div>

                    <div className="pricing__card">
                        <div className="pricing__card--header">
                            <div className="pricing__card--title">
                                <h3>Advance</h3>
                            </div>
                            <div className="pricing__card--price">
                                <span>Rs</span>
                                <span>500</span>
                            </div>
                        </div>
                        <div className="pricing__card--list">
                            <ul>
                                <li>
                                <FontAwesomeIcon
                                className="Xmark"
                                icon={faXmark}
                                />
                                Plays ad
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                    className="check"
                                    icon={faCheck}
                                    />
                                    Download
                                </li>

                                <li>
                                    <FontAwesomeIcon
                                    className="check"
                                    icon={faCheck}
                                    />
                                    Accesses only 3 Device
                                </li>

                                <li>
                                    <FontAwesomeIcon
                                    className="check"
                                    icon={faCheck}
                                    />
                                   Mobile account 
                                </li>

                                <li>
                                    <FontAwesomeIcon
                                    className="check"
                                    icon={faCheck}
                                    />
                                    360p
                                </li>
                            </ul>
                        </div>
                        <div className="pricing__card--action">
                            <a>
                                Watch
                            </a>
                        </div>
                    </div>

                    <div className="pricing__card">
                        <div className="pricing__card--header">
                            <div className="pricing__card--title">
                                <h3>Premium</h3>
                            </div>
                            <div className="pricing__card--price">
                                <span>Rs</span>
                                <span> 750</span>
                            </div>
                        </div>
                        <div className="pricing__card--list">
                            <ul>
                                <li>
                                    <FontAwesomeIcon
                                    className="Xmark"
                                    icon={faXmark}
                                    />
                                    Plays ad
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                    className="check"
                                    icon={faCheck}
                                    />
                                    Download
                                </li>

                                <li>
                                    <FontAwesomeIcon
                                    className="check"
                                    icon={faCheck}
                                    />
                                    Accesses only 5 Device
                                </li>

                                <li>
                                    <FontAwesomeIcon
                                    className="check"
                                    icon={faCheck}
                                    />
                                   Mobile account 
                                </li>

                                <li>
                                    <FontAwesomeIcon
                                        className="check"
                                        icon={faCheck}
                                     />
                                    720p</li>
                            </ul>
                        </div>

                        <div className="pricing__card--action">
                            <a>
                                Watch
                            </a>
                        </div>
                    </div>

               </div>
            </div>
        </section>
     );
}
 
export default Pricing;