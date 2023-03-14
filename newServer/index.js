const serverless = require("serverless-http");
const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/getOHMSLunch", async(req, res) => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let dayOfWeek = new Date().getDay();

    if (dayOfWeek == 0 || dayOfWeek == 6) {
        res.send({
            lunchName: "No School",
            lunchDescription: "No School",
        });
        return;
    }

    const lunch = await axios.get(
        "https://jordandistrict.api.nutrislice.com/menu/api/weeks/school/oquirrh-hills/menu-type/main-line/" +
        year +
        "/" +
        month +
        "/" +
        day +
        "/", {
            headers: {
                accept: "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "x-nutrislice-origin": "jordandistrict.nutrislice.com",
            },
        }
    );

    let data = lunch.data;
    let lunchName = data.days[dayOfWeek].menu_items[0].food.name;
    let lunchDescription = data.days[dayOfWeek].menu_items[0].food.description;

    res.send({
        lunchName: lunchName,
        lunchDescription: lunchDescription,
    });
});

app.post("/skywardLogin", async(req, res) => {
    console.log(req.body);
    let username = req.body.user;
    let password = req.body.pass;
    let time = Date.now();

    const login = await axios.post(
        "https://skystu.jordan.k12.ut.us/scripts/wsisa.dll/WService=wsEAplus/skyporthttp.w", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Pragma: "no-cache",
                Accept: "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Cache-Control": "no-cache",
                Host: "skystu.jordan.k12.ut.us",
                Origin: "https://skystu.jordan.k12.ut.us",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0",
                Connention: "keep-alive",
                Referer: "https://skystu.jordan.k12.ut.us/scripts/wsisa.dll/WService=wsEAplus/skyporthttp.w",
                "Content-Length": "1132",
            },
            data: {
                requestAction: "eel",
                method: "extrainfo",
                codeType: "tryLogin",
                codeValue: username,
                login: username,
                password: password,
                cUserRole: "family/student",
                fwtimestamp: time,
            },
        }
    );
    res.send();
});
app.use((req, res, next) => {
    return res.status(404).json({
        error: "Not Found",
    });
});

//module.exports.handler = serverless(app);
app.listen(5550, () => console.log(`listening on port ${port}!`));