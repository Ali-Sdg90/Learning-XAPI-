// GET DATA FROM LRS!!!

const lrsUrl = "https://ali-sdg90.lrs.io/xapi/statements";
const userName = "ekidah";
const key = "aruife";

const credentials = btoa(`${userName}:${key}`);

async function fetchStatementsFromLRS() {
    try {
        const response = await fetch(lrsUrl, {
            method: "GET",
            headers: {
                Authorization: `Basic ${credentials}`,
                "X-Experience-API-Version": "1.0.3",
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Retrieved statements:", data);
    } catch (error) {
        console.error("Error fetching statements:", error);
    }
}

fetchStatementsFromLRS();
