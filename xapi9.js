const lrsUrl = "https://ali-sdg90.lrs.io/xapi/statements";
const userName = "ekidah";
const key = "aruife";
const verbId = "http://adlnet.gov/expapi/verbs/answered";

const credentials = btoa(`${userName}:${key}`);

async function fetchAnsweredStatementsFromLRS() {
    const queryUrl = `${lrsUrl}?verb=${encodeURIComponent(verbId)}`;

    try {
        const response = await fetch(queryUrl, {
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

        if (Array.isArray(data.statements)) {
            data.statements.forEach((element) => {
                if (element.result && element.result.response) {
                    console.log(element.result.response);
                }
            });
        } else {
            console.error("Data is not an array:", data);
        }
    } catch (error) {
        console.error("Error fetching statements:", error);
    }
}

fetchAnsweredStatementsFromLRS();
