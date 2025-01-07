import React from 'react'
import './DetailsList.css'

export default function DetailsList(props) {
    return (
        <>
            <section className='details'>
                <div className='container'>
                    <div className='detail-content'>
                        <div className='detail-list'>
                            {props.details.map((detail) => (
                                <div className='detail-item' key={detail.id}>
                                    <div className='detail-item-c'>
                                        <div className='detail-item-icon'>
                                            <img src={detail.icon} alt='' />
                                        </div>
                                        <div className='detail-item-title'>
                                            <h1>{detail.number}<span>+</span></h1>
                                            <h4>{detail.title}</h4>
                                        </div>
                                    </div>
                                    <div className='detail-item-description'>
                                        <p>{detail.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
