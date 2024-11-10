let pronoun = ["the", "our","tu"];
let adj = ["great", "big", "siempre"];
let noun = ["jogger", "racoon", "pued"];

function anyString() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        console.log(pronoun[i] + adj[x] + noun[y] + ".com");
      }
    }
  }
  for (let q = 0; q < pronoun.length; q++) {
    for (let w = 0; w < adj.length; w++) {
      for (let e = 0; e < noun.length; e++) {
        console.log(pronoun[q] + adj[w] + noun[e] + ".es");
      }
    }
  }
}
anyString();
