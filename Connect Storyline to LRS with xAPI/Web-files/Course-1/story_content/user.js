function ExecuteScript(strId)
{
  switch (strId)
  {
  }
}

function getActor() {
  return {
    "objectType": "Agent",
    "account": {
      "homePage": "https://www.example.com",
      "name": "Random" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    }
  };
}
