const conf = {
    endpoint: "https://ali-sdg90.lrs.io/xapi/",
    auth: "Basic " + toBase64("ekidah:aruife"),
};

ADL.XAPIWrapper.changeConfig(conf);

const parameters = ADL.XAPIWrapper.searchParams();

// parameters["agent"] = '{"mailto:devlinpeck@gmail.com"}';
parameters["verb"] = "http://adlnet.gov/expapi/verbs/answered";
// parameters["activity"] = "http://example.com/quiz-1";

const queryData = ADL.XAPIWrapper.getStatements(parameters);
