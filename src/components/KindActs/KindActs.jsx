import "./KindActs.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KindAct from "../KindAct/KindAct";
import { ReactComponent as ArrowBack } from "../../assets/icons/arrowBack.svg";
// import arrowBack from "../../assets/icons/arrowBack.svg";

function KindActs() {
    const api = "http://localhost:8000";

    const navigate = useNavigate()

    const [kindActs, setKindActs] = useState([]); // all acts of kindness
    const [, setKindAct] = useState(null);
    const { id } = useParams();

    // Define useEffect hook to get all videos from the API
    useEffect(() => {
        getKindActs();
    }, []);

    // Define useEffect hook to get the selected act of kindness when the kindness id changes
    useEffect(() => {
        if (id) {
            getKindAct(id);
        } else if (kindActs.length) {
            getKindAct(kindActs[0].id);
        }
    }, [id, kindActs]);

    // Define function to get a selected act of kindness from the API by id
    function getKindAct(id) {
        axios
            .get(`${api}/kindness/${id}`)
            .then((res) => {
                setKindAct(res.data);
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    };

    // Define function to get all the acts of kindness from the API
    function getKindActs() {
        axios
            .get(`${api}/kindness`)
            .then((response) => {
                setKindActs(response.data);
                console.log(response.data)
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    };


    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true
    }


    return (
        <section className="kindness">
            <div className="kindness__header-wrap">
                <Link className="kindness__header-link btn" onClick={() => { navigate(-1); }}>
                    <ArrowBack className="kindness__header-icon" />
                    {/* <img className="kindness__header-icon" src={arrowBack} alt="arrow back icon" /> */}
                </Link>
                <h2 className="kindness__header">Choose your daily <span className="kindness__underline">act of kindness</span> </h2>
            </div>
            <Slider {...settings}>
                {kindActs
                    .map((kindAct) => (
                        <>
                            <KindAct kindActTitle={kindAct.title} kindActDescription={kindAct.description} kindActImage={kindAct.image} />
                        </>
                    ))}
            </Slider>
        </section>
    );
}



export default KindActs;