import React from 'react'

export default function Header() {
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
                                    <a href="">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="ri-instagram-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="ri-youtube-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
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
