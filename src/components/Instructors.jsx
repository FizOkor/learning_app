import React from 'react';

const Instructor = ({ name, designation, image, facebookUrl, twitterUrl, instagramUrl, delay }) => {
    return (
        <div className={`col-lg-3 col-md-6 wow fadeInUp`} data-wow-delay={delay}>
            <div className="team-item bg-light">
                <div className="overflow-hidden">
                    <img className="img-fluid" src={image} alt={name} />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                        <a className="btn btn-sm-square btn-primary mx-1" href={facebookUrl}><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href={twitterUrl}><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-sm-square btn-primary mx-1" href={instagramUrl}><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="text-center p-4">
                    <h5 className="mb-0">{name}</h5>
                    <small>{designation}</small>
                </div>
            </div>
        </div>
    );
};

const Instructors = () => {
    const instructors = [
        {
            name: 'Instructor Name 1',
            designation: 'Designation 1',
            image: '/assets/img/team-1.jpg',
            facebookUrl: '',
            twitterUrl: '',
            instagramUrl: '',
            delay: '0.1s',
        },
        {
            name: 'Instructor Name 2',
            designation: 'Designation 2',
            image: '/assets/img/team-2.jpg',
            facebookUrl: '',
            twitterUrl: '',
            instagramUrl: '',
            delay: '0.3s',
        },
        {
            name: 'Instructor Name 3',
            designation: 'Designation 3',
            image: '/assets/img/team-3.jpg',
            facebookUrl: '',
            twitterUrl: '',
            instagramUrl: '',
            delay: '0.5s',
        },
        {
            name: 'Instructor Name 4',
            designation: 'Designation 4',
            image: '/assets/img/team-4.jpg',
            facebookUrl: '',
            twitterUrl: '',
            instagramUrl: '',
            delay: '0.7s',
        },
    ];

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
                    <h1 className="mb-5">Expert Instructors</h1>
                </div>
                <div className="row g-4">
                    {instructors.map((member, index) => (
                        <Instructor key={index} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors
