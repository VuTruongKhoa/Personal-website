import React from "react";

export default function Navbar(){
    return (
        <div>
            <img className = "anh_khoa" src="khoa.png"/>
            <nav className="text-full">

                <div>
                    <h1 className="myname"><a href="https://vietcv.io/en/cvs/e53d7b5c-b2fc-4495-98b8-5da49a789250" className="My--name">Vũ Trường Khoa</a></h1>
                    <h4 className="myjob">Fullstack Developer intern</h4>
                    <h5 className="myweb">Vũ Trường Khoa's website</h5>

                    <a className="btn" href="https://mail.google.com/mail/u/0/?pli=1#inbox"><button className="btn-email border-radius"><i className="ti-email"></i>Email</button></a>

                    <a className="btn" href="https://www.linkedin.com/in/khoa-v%C5%A9-tr%C6%B0%E1%BB%9Dng-34921627a/"><button className="btn-linkedin border-radius"><i className="ti-linkedin"></i>Linkedin</button> </a>
                </div>
            </nav>
        </div>
    )
}