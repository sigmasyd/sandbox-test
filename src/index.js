import EUWeb from "taller-de-js-basico-sigmatest";

const eu = new EUWeb();
eu.addNews({ slug: "eoooo" });
eu.addNews({ slug: "sigmasyd" });

document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<pre>
  ${JSON.stringify(eu.getNews(), null, 2)}
</pre>
`;
