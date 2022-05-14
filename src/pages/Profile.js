import React from 'react'
import Img from '../avatar1.jpg'
import Camera from '../components/svg/Camera'

const Profile = () => {
    return (
        <section>
            <div className='profile_container'>
                <div className='img_container'>
                    <img src={Img} alt="avatar1" />
                    <div className="overlay">
                        <div>
                            <label htmlFor='photo'>
                                <Camera />
                            </label>
                            <input type="file" accept='image/*' style={{ display: 'none' }} id='photo'></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_container'>
                <h3>User Name</h3>
                <p>User email</p>
                <hr />
                <small>Joined on: ...</small>

            </div>

        </section>
    )
}

export default Profile