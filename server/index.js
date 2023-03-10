const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/getOHMSLunch", async(req, res) => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let dayOfWeek = new Date().getDay();

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));