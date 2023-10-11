// opgave12.1.js
//Tag udgangspunkt i opgave12.1.html, opgave12.1.css og opgave12.1.js.
//Åben earthquakeUrl’en i en browser og undersøg den hentede JSON.
//Lav dernæst en webside, der viser en tabel over den sidst uges jordskælv med en styrke på mindst 5. //Tabellen skal vise styrke, sted og tidspunkt for hvert jordskælv – sorteret efter styrke.

const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

async function get(url) {
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error(response.status);
    }
    return await response.json();
}

async function main(url) {
    try {
        //Henter json
        const earthquakesData = await get(url);
        //sorterer alt det andet pis fra, så det kun er jordskælv data
        const earthquakes = earthquakesData.features;

        console.log(earthquakes);
        //sorterer arrayet, så de højeste kommer først
        earthquakes.sort((a, b) => b.properties.mag - a.properties.mag);

        //looper gennem jordskælv og laver tilhørende tr og td's til dem.
        for (const jordskælv of earthquakes) {
            if (jordskælv.properties.mag > 5.0) {
                let tabel = document.getElementById('table');
                let tr = document.createElement('tr');

                let td1 = document.createElement('td');
                td1.textContent = jordskælv.properties.mag;
                tr.appendChild(td1);

                let td2 = document.createElement('td');
                td2.textContent = jordskælv.properties.place;
                tr.appendChild(td2);

                let td3 = document.createElement('td');
                let date = new Date(jordskælv.properties.time);
                td3.textContent = date.toLocaleString();
                tr.appendChild(td3);

                tabel.appendChild(tr);
            }
        }
    } catch (fejl) {
        console.log(fejl);
    }

}

main(earthquakeUrl);



