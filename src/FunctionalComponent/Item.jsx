import React from 'react'

export default function Item(props) {

    return (
        <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
            <div className="card">
                <img src={props.pic ? props.pic : "/images/noimage.jpg"} height={160} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title ">{props.title}</h5>
                    <div className='date-source'>
                        <p>{props.source}</p>
                        <p>{new Date(props.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className="card-text">{props.description}</p>
                        <a href={props.url} className="btn btn-primary background w-100">Read Full Article</a>
                    </div>

                </div>
            </div>
        </div>
    )

}
