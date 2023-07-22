import './style.scss'
import logo from "../../Whot-Africa-Assets/Rectangle 18.png"
import logo2 from "../../Whot-Africa-Assets/Rectangle 14.png"
import logo3 from "../../Whot-Africa-Assets/Rectangle 15.png"
import logo4 from "../../Whot-Africa-Assets/Rectangle 36.png"
import logo5 from "../../Whot-Africa-Assets/Rectangle 37.png"
import logo6 from "../../Whot-Africa-Assets/Rectangle 35.png"

const Home = () => {
    return ( 
        
        <div className='entire-homepage'>
            {/* Enjoy Your Favourite */}
            <section className='section-one'>
                <div className='container text-white'>
                        <div className='sec-one-items'>
                            <div>
                                <h2>Enjoy Your favourite <br /> Indegenous African Games</h2>
                                <p>You can enjoy favourite indigenous games on your device and rekindle your love for them. They are our games nd they are our pride. Simply click to download one for your device.</p>
                            </div>
                            <div>
                                <img src="https://res.cloudinary.com/dglwvpea5/image/upload/v1689802071/g8_malrdv.png" alt="" />
                            </div>
                        </div>
                        
                </div>                        
            </section>
            {/* Our Games */}
            <section className='section-two'>
                <div className='container text-white'>
                    <div>
                        <h2>Our Games</h2>
                        <p>We have the following games available on our mobiles</p>
                    </div>
                    <div className='card-css'>
                        <div className="card" style={{width:180}}>
                                <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Traditional Whot</h5>
                            <p className="card-text">Enjoy a game of traditional whot and get your mind occuppied. You can play alone or with your friends using the internet</p>
                            <a href="#" className="btn btn-success btn-lg">Play</a>
                        </div>
                        </div>
                        <div className="card" style={{width:180}}>
                                <img src={logo2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Traditional Whot</h5>
                            <p className="card-text">Enjoy a game of traditional whot and get your mind occuppied. You can play alone or with your friends using the internet</p>
                            <a href="#" className="btn btn-success btn-lg">Play</a>
                        </div>
                        </div>
                        <div className="card" style={{width:180}}>
                                <img src={logo3} className="card-img-top btn-lg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Traditional Whot</h5>
                            <p className="card-text">Enjoy a game of traditional whot and get your mind occuppied. You can play alone or with your friends using the internet</p>
                            <a href="#" className="btn btn-success btn-lg">Play</a>
                        </div>
                        </div>
                        <div className="card" style={{width:180}}>
                                <img src={logo4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Traditional Whot</h5>
                            <p className="card-text">Enjoy a game of traditional whot and get your mind occuppied. You can play alone or with your friends using the internet</p>
                            <a href="#" className="btn btn-success btn-lg">Play</a>
                        </div>
                        </div>
                        <div className="card" style={{width:180}}>
                                <img src={logo5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Traditional Whot</h5>
                            <p className="card-text">Enjoy a game of traditional whot and get your mind occuppied. You can play alone or with your friends using the internet</p>
                            <a href="#" className="btn btn-success btn-lg">Play</a>
                        </div>
                        </div>
                    </div>             
                </div>
            </section>
            {/* Games Tutorial */}
            <section className='section-three text-white'>
                <div className='container'>
                    <div className='games-tut'>
                        <h2>Games Tutorial</h2>
                        <p>Let us show you some best way to enjoy the games we have.</p>
                    </div>
                    <div className='card-accordion-div d-flex align-items-center'>
                            <div className="card games-tut-card" style={{width: 380, height: 380}}>
                                    <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" className="card-img-top" controls />
                                <div className="card-body">
                                    <h5 className="card-title">How to start a game</h5>
                                    <p className="card-text">We will lead you through the basic knowledge you need to start the game</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div className="accordion" id="accordionStayOpen">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#alwaysOpenOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>How to start a game</strong>
                                    </button>
                                    </h2>
                                    <div id="alwaysOpenOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        A brief showcase of how to enjoy the game with your friends.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong>How to start a game</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        A brief showcase of how to enjoy the game with your friends.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>How to start a game</strong>
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        A brief showcase of how to enjoy the game with your friends.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <strong>How to start a game </strong>
                                    </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        A brief showcase of how to enjoy the game with your friends.
                                    </div>
                                    </div>
                                </div>
                            </div>  
                    </div>
                </div>
            </section>
            {/* FAQS */}
            <section className='section-four text-white'>
                    <div className='container'>
                        <h2>Frequently asked questions</h2>
                        <p>Incase you have some questions for us, kindly go through this section<br></br> first before you contact our customer support</p>
                    </div>    
                    <div className="faqs-container d-flex">
                        <div className="faqs-card">
                            <img src={logo6} alt="" />
                        </div>
                        <div className="faqs-accordion ms-4 me-5">
                            <div className="accordion1">
                                <div className="accordion" id="accordionStayOpen">
                                    <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#alwaysOpenOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>How to start a game</strong>
                                    </button>
                                    </h2>
                                    <div id="alwaysOpenOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, eius minus accusamus ipsam quis explicabo earum aspernatur est harum non assumenda! Ad ea id excepturi consectetur deserunt quae facere.
                                    </div>
                                    </div>
                                </div>
                                </div>
                                
                                <div className="accordion2">
                                    <div className="accordion" id="accordionStayOpen">
                                    <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#alwaysOpenOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>How to start a game</strong>
                                    </button>
                                    </h2>
                                    <div id="alwaysOpenOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, eius minus accusamus ipsam quis explicabo earum aspernatur est harum non assumenda! Ad ea id excepturi consectetur deserunt quae facere.
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="accordion3">
                                    <div className="accordion" id="accordionStayOpen">
                                    <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#alwaysOpenOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>How to start a game</strong>
                                    </button>
                                    </h2>
                                    <div id="alwaysOpenOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, eius minus accusamus ipsam quis explicabo earum aspernatur est harum non assumenda! Ad ea id excepturi consectetur deserunt quae facere.
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="accordion4">
                                    <div className="accordion" id="accordionStayOpen">
                                    <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#alwaysOpenOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>How to start a game</strong>
                                    </button>
                                    </h2>
                                    <div id="alwaysOpenOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, eius minus accusamus ipsam quis explicabo earum aspernatur est harum non assumenda! Ad ea id excepturi consectetur deserunt quae facere.
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="accordion5">
                                    <div className="accordion" id="accordionStayOpen">
                                    <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#alwaysOpenOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>How to start a game</strong>
                                    </button>
                                    </h2>
                                    <div id="alwaysOpenOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, eius minus accusamus ipsam quis explicabo earum aspernatur est harum non assumenda! Ad ea id excepturi consectetur deserunt quae facere.
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="accordion6">
                                    <div className="accordion" id="accordionStayOpen">
                                    <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#alwaysOpenOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>How to start a game</strong>
                                    </button>
                                    </h2>
                                    <div id="alwaysOpenOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium, eius minus accusamus ipsam quis explicabo earum aspernatur est harum non assumenda! Ad ea id excepturi consectetur deserunt quae facere.
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                          </div>  
                    </div>
            </section>
            {/* Contact Us */}
            <section className='section-five text-white'>
                <div className="container contact-us-div">
                    <div className="sec-five-text">
                        <h1>For more enquiries, youn can contact us here or send a message to us:</h1>
                    </div>
                    <div className="input-div">
                        <div className='mb-3'>
                            <h6>Name</h6>
                            <div className="input-group flex-nowrap">
                            <input type="text" className="form-control" placeholder="Type name" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <h6>Email/Phone Number</h6>
                            <div className="input-group flex-nowrap">
                            <input type="email" className="form-control" placeholder="Type email/phone number" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                            <p>we'll never share your email with anyone</p>
                        </div>
                        <div className="">
                            <h6>Message</h6>
                            <div className="message-input input-group flex-nowrap">
                            <input type="textarea" className="form-control" placeholder="Type your message..." aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                            <h1>
                                Testing git push
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
     );
}
 
export default Home;