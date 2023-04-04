import "./KindAct.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function KindAct() {
    const api = "http://localhost:8000";

    const [kindActs, setKindActs] = useState([]); // all acts of kindness
    const [kindAct, setKindAct] = useState(null);
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


    return (
        <><h1>TEST SET TEST </h1></>
    );
}

export default KindAct;