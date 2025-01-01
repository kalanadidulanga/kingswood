import React from 'react'
import { Link } from 'react-router-dom';
import './Title.css';

export default function Title(props) {
    return (
        <div className='title'>
            <div className='container'>
                <div className='title-content'>
                    <div className='title-content-1'>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                    <div className='title-content-2'>
                        <Link to={props.path}>View All <i class="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
