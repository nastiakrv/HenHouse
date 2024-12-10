import Slider from '../../components/slider/slider'
import './singlePage.scss'
import { singlePostData, userData } from "../../lib/dummydata";
import Map from '../../components/map/map'
import { useLoaderData } from 'react-router-dom';
import DOMPurify from "dompurify";

function SinglePage() {
    const post = useLoaderData();
    //console.log(post)

    return (
        <div className='singlePage'>
            <div className="details">
                <div className="wrapper">
                    <Slider images={post.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{post.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="" />
                                    <span>{post.address}</span>
                                </div>
                                <div className="price">$ {post.price}</div>
                            </div>
                            <div className="user">
                                <img src={post.user.avatar} alt="" />
                                <span>{post.user.username}</span>
                            </div>
                        </div>
                        <div className="bottom"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(post.postDetail.desc),
                            }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className='title'>General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="/utility.png" alt="" />
                            <div className="featureText">
                                <span>Utilities</span>
                                {
                                    post.postDetail.utilities === "owner" ?
                                        <p>Owner is responsible</p> :
                                        <p>Tenant is responsible</p>
                                }
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                {
                                    post.postDetail.utilities === "allowed" ?
                                        (<p>Pets are allowed</p>) : (
                                            <p>Pets are not allowed</p>)
                                }
                            </div>
                        </div>
                    </div>
                    <p className='title'>Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="size.png" alt="" />
                            <span>{post.postDetail.size} sqm</span>
                        </div>
                        <div className="size">
                            <img src="/bed.png" alt="" />
                            <span>{post.bedroom} beds</span>
                        </div>
                        <div className="size">
                            <img src="bath.png" alt="" />
                            <span>{post.bathroom} bathroom</span>
                        </div>
                    </div>
                    <p className='title'>Nearby Places</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <img src="/school.png" alt="" />
                            <div className="featureText">
                                <span>School</span>
                                <p>{post.postDetail.school > 999
                                    ? post.postDetail.school / 1000 + " km"
                                    : post.postDetail.school + " m"}{" "}
                                    away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/bus.png" alt="" />
                            <div className="featureText">
                                <span>Tram Stop</span>
                                <p>{post.postDetail.bus} m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/restaurant.png" alt="" />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>{post.postDetail.restaurant} m away</p>
                            </div>
                        </div>
                    </div>
                    <p className='title'>Location</p>
                    <div className="mapContainer">
                        <Map items={[post]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="" />
                            Send a message
                        </button>
                        <button>
                            <img src="/save.png" alt="" />
                            Save the Place
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage