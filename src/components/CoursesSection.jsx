import React from 'react';

const CourseCard = ({ imgSrc, price, title, rating, reviews, instructor, duration, students }) => (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="course-item bg-light">
            <div className="position-relative overflow-hidden">
                <img className="img-fluid" src={imgSrc} alt={title} />
                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                </div>
            </div>
            <div className="text-center p-4 pb-0">
                <h3 className="mb-0">${price}</h3>
                <div className="mb-3">
                    {Array(rating).fill().map((_, i) => (
                        <small key={i} className="fa fa-star text-primary"></small>
                    ))}
                    <small>({reviews})</small>
                </div>
                <h5 className="mb-4">{title}</h5>
            </div>
            <div className="d-flex border-top">
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>{instructor}</small>
                <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>{duration}</small>
                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>{students} Students</small>
            </div>
        </div>
    </div>
);

const CoursesSection = () => {
    const courseData = [
        {
            imgSrc: "assets/img/course-1.jpg",
            price: 149.00,
            title: "Web Design & Development Course for Beginners",
            rating: 5,
            reviews: 123,
            instructor: "John Doe",
            duration: "1.49 Hrs",
            students: 30
        },
        {
            imgSrc: "assets/img/course-2.jpg",
            price: 149.00,
            title: "Graphic Design Basics",
            rating: 5,
            reviews: 123,
            instructor: "Jane Smith",
            duration: "2 Hrs",
            students: 45
        },
        {
            imgSrc: "assets/img/course-3.jpg",
            price: 149.00,
            title: "Digital Marketing 101",
            rating: 5,
            reviews: 123,
            instructor: "David Brown",
            duration: "1.5 Hrs",
            students: 25
        }
    ];

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                    <h1 className="mb-5">Popular Courses</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    {courseData.map((course, index) => (
                        <CourseCard
                            key={index}
                            imgSrc={course.imgSrc}
                            price={course.price}
                            title={course.title}
                            rating={course.rating}
                            reviews={course.reviews}
                            instructor={course.instructor}
                            duration={course.duration}
                            students={course.students}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesSection;
