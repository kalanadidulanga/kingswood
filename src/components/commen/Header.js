import React from 'react'
import { useSocial } from '../../libs/useSocialStore';

export default function Header() {
    const { socialLinks, setSocialLinks } = useSocial();

    return (
        <>
            <header>
                <div className='container'>
                    <div className='header-content'>
                        <div className='header-content-1'>
                            <ul>
                                <li>
                                    <i class="ri-map-pin-line"></i>
                                    <p>489, Pallama Road , Bangadeniya</p>
                                </li>
                                <li>
                                    <i class="bi bi-telephone"></i>
                                    <p>0773838366</p>
                                </li>
                                <li>
                                    <i class="bi bi-envelope"></i>
                                    <p>info@kingswoodbritish.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className='header-content-2'>
                            <ul>
                                <li>
                                    <a href={socialLinks.facebook} target='_blank'>
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={socialLinks.instagram} target='_blank'>
                                        <i class="ri-instagram-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={socialLinks.youtube} target='_blank'>
                                        <i class="ri-youtube-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={socialLinks.twitter} target='_blank'>
                                        <i class="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='header-background'></div>
            </header>
        </>
    )
}
