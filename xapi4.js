const sendStatement = (verb, verbID, object, objectID) => {
    const player = GetPlayer();
    const uNameJS = player.GetVar("uName");
    const uEmailJS = player.GetVar("uEmail");

    const endpoint = "https://ali-sdg90.lrs.io/xapi/";
    const username = "ekidah";
    const password = "aruife";
    const auth = "Basic " + btoa(username + ":" + password);

    const conf = {
        endpoint: endpoint,
        auth: auth,
    };

    ADL.XAPIWrapper.changeConfig(conf);

    const statement = {
        actor: {
            name: uNameJS,
            mbox: "mailto:" + uEmailJS,
        },
        verb: {
            id: verbID,
            display: { "en-US": verb },
        },
        object: {
            id: objectID,
            definition: {
                name: { "en-US": object },
            },
        },
    };

    try {
        const result = ADL.XAPIWrapper.sendStatement(statement);
        console.log(result);
    } catch (error) {
        console.error("Error sending xAPI statement:", error);
    }
};
