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
            display: { "en-us": verb },
        },
        object: {
            id: objectID,
            definition: {
                name: { "en-us": object },
            },
        },
    };

    const result = ADL.XAPIWrapper.sendStatement(statement);
};
