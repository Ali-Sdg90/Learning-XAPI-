function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6H5HBgF80iG":
        Script1();
        break;
      case "6mEcLLOXoLe":
        Script2();
        break;
      case "67hkgewvjnA":
        Script3();
        break;
      case "5m2AjS9agM9":
        Script4();
        break;
  }
}

function Script1()
{
  sendStatement("answered", "http://adlnet.gov/expapi/verbs/answered",
"Choice A", "http://example.com/choice-A")
}

function Script2()
{
  sendStatement("answered", "http://adlnet.gov/expapi/verbs/answered",
"Choice B", "http://example.com/choice-B")
}

function Script3()
{
  sendStatement("answered", "http://adlnet.gov/expapi/verbs/answered",
"Choice C", "http://example.com/choice-C")
}

function Script4()
{
  sendStatement("viewed", "http://id.tincanapi.com/verb/viewed",
"Cheatsheet", "http://example.com/cheatsheet")
}

