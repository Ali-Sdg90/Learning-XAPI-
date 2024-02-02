const sendStatement = (verb, verbID, object, objectID) => {
    const player = GetPlayer();
    const uNameJS = player.GetVar("uName");
    const uEmailJS = player.GetVar("uEmail");

    const conf = {
        endpoint: "https://ali-sdg90.lrs.io/xapi/",
        auth: "Basic " + toBase64("ekidah:aruife"),
    };

    ADL.XAPIWrapper.changeConfig(conf);

    const statement = {
        actor: {
            name: uNameJS,
            mbox: "mailto:" + uEmailJS,
        },
        verb: {
            id: verbID,
            display: { "en-US": verb }, // Corrected the language tag
        },
        object: {
            id: objectID,
            definition: {
                name: { "en-US": object }, // Corrected the language tag
            },
        },
    };

    const result = ADL.XAPIWrapper.sendStatement(statement);
};
